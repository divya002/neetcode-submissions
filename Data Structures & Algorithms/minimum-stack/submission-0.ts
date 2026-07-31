class MinStack {
    stack=[];
    minStack=[];
    constructor() {
        this.stack=[];
        this.minStack=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        if(this.minStack.length==0 || this.minStack[this.minStack.length-1]>=val)
        this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        let ele=this.stack.pop();
        if(this.minStack[this.minStack.length-1]==ele)
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
         return this.minStack[this.minStack.length-1];
    }
}
