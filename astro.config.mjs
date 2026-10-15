// @ts-check

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// Astro writes alt="" as a bare `alt`. Browsers read both the same, but some SEO crawlers
// report the bare form as a missing alt, so decorative images get an explicit alt="".
function explicitEmptyAlt() {
	return {
		name: 'explicit-empty-alt',
		hooks: {
			'astro:build:done': async ({ dir }) => {
				const root = fileURLToPath(dir);
				const files = (await readdir(root, { recursive: true })).filter((f) => f.endsWith('.html'));
				for (const file of files) {
					const path = join(root, file);
					const html = await readFile(path, 'utf8');
					const fixed = html.replace(/<img\b[^>]*>/g, (tag) => tag.replace(/\salt(?=[\s/>])/, ' alt=""'));
					if (fixed !== html) await writeFile(path, fixed);
				}
			},
		},
	};
}

// https://astro.build/config
export default defineConfig({
	site: 'https://carolinagomes-seo.github.io',
	integrations: [sitemap(), explicitEmptyAlt()],
	// Inline the (small) CSS into each page so it doesn't block the first render
	build: { inlineStylesheets: 'always' },
	// Self-hosted Hanken Grotesk (see <Font> in src/components/BaseHead.astro)
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Hanken Grotesk',
			cssVariable: '--font-hanken',
			weights: [400, 500, 600],
			styles: ['normal', 'italic'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['sans-serif'],
		},
	],
});
