import { describe, test, expect } from 'bun:test';
import quicksort from './quicksort';

describe('quicksort', () => {
	test('sorts array', () => {
		expect(quicksort([6, 9, 4, 2, 0, 1])).toEqual([0, 1, 2, 4, 6, 9])
	}
	);
});
