

export default class MinHeap {
	public length: number;
	private data: number[]; // JS array is effectively a ArrayList which want in this case either way

	constructor() {
		this.data = [];
		this.length = 0;
	}

	insert(value: number): void {
		this.data[this.length] = value;
		this.heapifyUp(this.length);
		this.length++;
	}

	delete(): number {
		if (this.length === 0) {
			return -1;
		}

		const out = this.data[0];
		this.length--;

		if (this.length === 0) {
			this.data = [];
			return out;
		}
		this.data[0] = this.data[this.length];
		this.heapifyDown(0);

		return out;
	}

	private heapifyDown(index: number): void {
		if (index >= this.length) {
			return;
		}

		const leftIndex = this.leftChild(index);
		const rightIndex = this.rightChild(index);

		if (leftIndex >= this.length) {
			return;
		}

		const leftValue = this.data[leftIndex];
		const rightValue = this.data[rightIndex];
		const value = this.data[index];

		if (leftValue > rightValue && value > rightValue) {
			this.data[index] = rightValue;
			this.data[rightIndex] = value;
			this.heapifyDown(rightIndex);
		} else if (rightValue > leftValue && value > leftValue) {
			this.data[index] = leftValue;
			this.data[leftIndex] = value;
			this.heapifyDown(leftIndex);
		}
	}

	private heapifyUp(index: number): void {
		if (index === 0) {
			return;
		}

		const parent = this.parent(index);
		const parentVal = this.data[parent];
		const val = this.data[index];

		if (parentVal > val) {
			this.data[index] = parentVal;
			this.data[parent] = val;
			this.heapifyUp(parent);
		}
	}

	private parent(index: number): number {
		return Math.floor((index - 1) / 2);
	}

	private leftChild(index: number): number {
		return index * 2 + 1;
	}

	private rightChild(index: number): number {
		return index * 2 + 2;
	}
}
