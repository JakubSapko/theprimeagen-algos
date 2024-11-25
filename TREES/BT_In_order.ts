
type BinaryNode<T> = {
	value: T;
	left?: BinaryNode<T>;
	right?: BinaryNode<T>;
}

function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
	if (!curr) {
		return path;
	}

	walk(curr.left, path);
	path.push(curr.value);
	walk(curr.right, path);
	return path;
}


export default function in_order_search(root: BinaryNode<number>, path: number[]): number[] { return walk(root, path); }
