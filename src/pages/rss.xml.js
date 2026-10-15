import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getPosts } from '../utils/posts';

export async function GET(context) {
	const posts = await getPosts();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		xmlns: { atom: 'http://www.w3.org/2005/Atom' },
		customData: [
			'<language>en-us</language>',
			`<atom:link href="${new URL('rss.xml', context.site)}" rel="self" type="application/rss+xml" />`,
		].join(''),
		items: posts.map(({ id, data: { title, description, pubDate } }) => ({
			title,
			description,
			pubDate,
			link: `/blog/${id}/`,
		})),
	});
}
