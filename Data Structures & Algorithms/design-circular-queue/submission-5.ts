class MyCircularQueue {
    first: number;
    rear: number;
    arr: number[];
    size: number;
    /**
     * @param {number} k
     */
    constructor(k: number) {
        this.arr = new Array(k);
        this.first = -1;
        this.rear = -1;
        this.size = k;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value: number): boolean {
        if (this.isFull()) return false;
        if (this.isEmpty()) this.first = 0;
        let indexN = (this.rear + 1) % this.size;
        this.arr[indexN] = value;
        this.rear = indexN;
        return true;
    }
    /**
     * @return {boolean}
     */
    deQueue(): boolean {
        if (this.isEmpty()) return false;
        this.arr[this.first] = undefined;
        if (this.rear == this.first) {
            this.first = -1;
            this.rear = -1;
        } else {
            this.first = (this.first + 1) % this.size;
        }
        return true;
    }

    /**
     * @return {number}
     */
    Front(): number {
        return (this.arr[this.first]!==undefined)?this.arr[this.first]:-1;
    }

    /**
     * @return {number}
     */
    Rear(): number {
        return this.arr[this.rear] !== undefined ? this.arr[this.rear] : -1;
    }

    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
       return this.first==-1
    }

    /**
     * @return {boolean}
     */
    isFull(): boolean {
        return (this.rear + 1) % this.size === this.first;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
