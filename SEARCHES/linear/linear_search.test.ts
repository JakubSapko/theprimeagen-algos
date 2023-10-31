import { describe, expect, test } from "bun:test";
import linear_search from "./linear_search";

describe("linear search", () => {
	test("should find element", () => {
		expect(linear_search([1, 2, 3, 4, 5], 5)).toBe(true);
	});
	test("should not find element", () => {
		expect(linear_search([6, 7, 8, 9], 1)).toBe(false);
	});
});
