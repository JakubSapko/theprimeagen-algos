
type BinaryNode<T> = {
	value: T,
	right?: BinaryNode<T>,
	left?: BinaryNode<T>
}

export default function bfs(root: BinaryNode<number>, needle: number): boolean {
	const q = [root]; // pretend it's a queue and not an ArrayList

	while (q.length) {
		const curr = q.shift() as BinaryNode<number>;

		if (curr.value === needle) {
			return true;
		}
		if (curr.left) {
			q.unshift(curr.left);
		}
		if (curr.right) {
			q.unshift(curr.right);
		}
	}

	return false;
}
