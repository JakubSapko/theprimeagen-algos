
export default function linear_search(haystack: number[], needle: number): boolean {
	let found = false;
	for (let i = 0; i < haystack.length; ++i) {
		if (haystack[i] === needle) {
			found = true;
		}
	}
	return found;
}
