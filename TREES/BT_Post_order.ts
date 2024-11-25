
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
	walk(curr.right, path);
	path.push(curr.value);
	return path;
}


export default function post_order_search(root: BinaryNode<number>, path: number[]): number[] { return walk(root, path); }
