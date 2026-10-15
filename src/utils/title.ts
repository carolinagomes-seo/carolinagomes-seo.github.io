import { AUTHOR } from '../data/author';

// Every page title is "Page topic | Ana Carolina Gomes". Google shows about 60 characters,
// so keep the topic to 39 characters or less; posts and case studies with a longer
// title set a shorter `seoTitle` in their frontmatter.
export function pageTitle(topic: string): string {
	return `${topic} | ${AUTHOR.name}`;
}
