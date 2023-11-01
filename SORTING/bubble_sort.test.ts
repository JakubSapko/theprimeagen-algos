import { describe, test, expect } from 'bun:test';
import bubble_sort from './bubble_sort';

describe('bubble sort', () => {
	test('sorts array', () => {
		expect(bubble_sort([6, 9, 4, 2, 0, 1])).toEqual([0, 1, 2, 4, 6, 9])
	}
	);
});
