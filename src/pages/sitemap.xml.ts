// Generates /sitemap.xml: one flat <urlset> (no index file), alongside the @astrojs/sitemap files.
// Same pages as sitemap-0.xml, built from the pages folder and the content collections, so new
// pages, posts and case studies are added automatically.
import type { APIRoute } from 'astro';
import { caseUrl, getCaseStudies, hasPage } from '../utils/cases';
import { isoDate } from '../utils/date';
import { getPosts, postUrl } from '../utils/posts';

// Static .astro pages, with their source so noindex pages can be left out.
// Dynamic routes ([...slug]) come from the collections below; endpoints (.ts) aren't pages.
const pageSources = import.meta.glob<string>('./**/*.astro', { query: '?raw', import: 'default', eager: true });

const isNoindex = (source: string) => /<BaseHead\b[^>]*\snoindex\b/.test(source);

// "./blog/index.astro" -> "/blog/", "./about.astro" -> "/about/"
const routeFromFile = (file: string) => {
	const path = file.replace(/^\.\//, '').replace(/\.astro$/, '').replace(/(^|\/)index$/, '');
	return path ? `/${path}/` : '/';
};

const escapeXml = (value: string) =>
	value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export const GET: APIRoute = async ({ site }) => {
	const base = site ?? new URL('https://carolinagomes-seo.github.io');

	const entries: { path: string; lastmod?: string }[] = [];

	for (const [file, source] of Object.entries(pageSources)) {
		if (file.includes('[') || /(^|\/)404\.astro$/.test(file) || isNoindex(source)) continue;
		entries.push({ path: routeFromFile(file) });
	}

	// Blog posts and case studies: lastmod = updatedDate, else pubDate (YYYY-MM-DD).
	// Other pages get no lastmod rather than a made-up date.
	for (const post of await getPosts()) {
		entries.push({ path: postUrl(post), lastmod: isoDate(post.data.updatedDate ?? post.data.pubDate) });
	}
	// Only published cases with their own page (in-progress cases without a body have none)
	for (const entry of (await getCaseStudies()).filter(hasPage)) {
		entries.push({ path: caseUrl(entry), lastmod: isoDate(entry.data.updatedDate ?? entry.data.pubDate) });
	}

	entries.sort((a, b) => a.path.localeCompare(b.path));

	const urls = entries.map(({ path, lastmod }) => {
		const loc = `<loc>${escapeXml(new URL(path, base).href)}</loc>`;
		return `  <url>\n    ${loc}${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`;
	});

	const xml = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...urls,
		'</urlset>',
		'',
	].join('\n');

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
