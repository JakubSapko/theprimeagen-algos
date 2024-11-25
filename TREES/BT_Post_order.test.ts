type BinaryNode<T> = { value: T; left?: BinaryNode<T>; right?: BinaryNode<T>; }

const root: BinaryNode<number> = { value: 7 };
root.left = { value: 23, left: { value: 5 }, right: { value: 4 } };
root.right = { value: 3, left: { value: 18 }, right: { value: 21 } };

import { describe, test, expect } from 'bun:test';
import post_order_search from './BT_Post_order';

describe('post_order_search', () => {
	test('walks the tree in post order', () => {

		const values: number[] = [];

		post_order_search(root, values);

		expect(values).toEqual([5, 4, 23, 18, 21, 3, 7])
	});
});
