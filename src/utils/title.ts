import { AUTHOR } from '../data/author';

// Google shows about 60 characters of a title. Add the author name only when it still fits,
// so long titles keep their keywords visible instead of being cut off.
const MAX_LENGTH = 60;

export function pageTitle(title: string): string {
	const branded = `${title} | ${AUTHOR.name}`;
	return branded.length <= MAX_LENGTH ? branded : title;
}
