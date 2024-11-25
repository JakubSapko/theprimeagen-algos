type BinaryNode<T> = { value: T; left?: BinaryNode<T>; right?: BinaryNode<T>; }

const root: BinaryNode<number> = { value: 7 };
root.left = { value: 23, left: { value: 5 }, right: { value: 4 } };
root.right = { value: 3, left: { value: 18 }, right: { value: 21 } };

import { describe, test, expect } from 'bun:test';
import in_order_search from './BT_In_order';

describe('in_order_search', () => {
	test('walks the tree in in-order', () => {

		const values: number[] = [];

		in_order_search(root, values);

		expect(values).toEqual([5, 23, 4, 7, 18, 3, 21])
	});
});
