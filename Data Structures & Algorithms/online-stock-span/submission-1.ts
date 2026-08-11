class StockSpanner {
    stack: any[];
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price: number): number {
        let min = 1;
        while (this.stack.length && this.stack[this.stack.length - 1].price <= price) {
            let p = this.stack.pop();
            min += p.min;
        }
        this.stack.push({ price, min });
        return min;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
