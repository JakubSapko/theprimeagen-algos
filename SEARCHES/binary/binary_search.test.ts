import { describe, test, expect } from "bun:test";
import binary_search from './binary_search';

describe("binary search", () => {
	test("finds value", () => {
		expect(binary_search([1, 4, 5, 9, 10], 5)).toBe(true);
	});
	test("does not find the value", () => {
		expect(binary_search([1, 4, 5, 9, 10], 3)).toBe(false);
	});
});
