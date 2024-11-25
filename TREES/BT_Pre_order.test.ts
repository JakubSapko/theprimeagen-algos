type BinaryNode<T> = { value: T; left?: BinaryNode<T>; right?: BinaryNode<T>; }

const root: BinaryNode<number> = { value: 7 };
root.left = { value: 23, left: { value: 5 }, right: { value: 4 } };
root.right = { value: 3, left: { value: 18 }, right: { value: 21 } };

import { describe, test, expect } from 'bun:test';
import pre_order_search from './BT_Pre_order';

describe('pre_order_search', () => {
	test('walks the tree in pre order', () => {

		const values: number[] = [];

		pre_order_search(root, values);

		expect(values).toEqual([7, 23, 5, 4, 3, 18, 21]);
	});
});
