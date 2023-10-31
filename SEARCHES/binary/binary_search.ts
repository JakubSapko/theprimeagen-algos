export default function binary_search(haystack: number[], needle: number): boolean {
	let lo = 0;
	let hi = haystack.length;

	do {
		let m = Math.floor(lo + (hi - lo) / 2);
		const val = haystack[m];

		if (val === needle) {
			return true;
		}
		if (val > m) {
			lo = m + 1;
		}
		else {
			hi = m;
		}
	} while (lo < hi);
	return false;
}

