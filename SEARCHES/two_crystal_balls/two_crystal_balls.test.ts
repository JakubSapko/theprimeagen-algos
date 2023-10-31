import { describe, test, expect } from 'bun:test';
import two_crystal_balls from './two_crystal_balls';

describe('two crystal balls problem', () => {
	test('finds index', () => {
		expect(two_crystal_balls([false, false, false, false, true, true, true])).toBe(4);
	})
});
