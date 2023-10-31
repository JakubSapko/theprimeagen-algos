

export default function two_crytsal_balls(breaks: boolean[]): number {
	const jump = Math.floor(Math.sqrt(breaks.length));
	let index = jump;
	for (; index < breaks.length; index += jump) {
		if (breaks[index]) {
			break;
		}
	}
	index -= jump;

	for (let j = 0; j <= jump && index < breaks.length; j += 1, index += 1) {
		if (breaks[index]) {
			return index;
		}
	}
	return -1;
}
