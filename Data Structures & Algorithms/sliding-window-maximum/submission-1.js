class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (!nums || nums.length === 0 || k === 0) return [];
        
        let result = [];
        let j = 0; // Left pointer

        let maxHeap = new MaxHeap();

        for (let i = 0; i < nums.length; i++) {
            // FIX 1: Insert an object bundling both the data value AND its index
            maxHeap.insert({ val: nums[i], idx: i });
            
            // Trigger window calculation once we reach size k
            if (i - j + 1 === k) {
                // FIX 2: Lazy Deletion. Clean up the top of the heap if its index is stale
                while (maxHeap.values.length > 0 && maxHeap.peek().idx < j) {
                    maxHeap.delete();
                }
                
                // The root node is now guaranteed to belong inside the current window frame
                result.push(maxHeap.peek().val);
                j++;
            }
        }
        return result;
    }
}

class MaxHeap {
    constructor() {
        this.values = [];
    }
    
    // FIX 3: Added a peek helper to inspect the maximum root without deleting it
    peek() {
        return this.values[0];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            
            // FIX 4: Compare actual data values (.val), NOT index markers!
            if (this.values[parent].val >= this.values[index].val) break;
            
            [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
            index = parent;
        }
    }

    downify() {
        let idx = 0;
        let length = this.values.length;
        while (true) {
            let swap = null;
            let leftChildIndex = 2 * idx + 1;
            let rightChildIndex = 2 * idx + 2;
            
            // FIX 5: Updated all direct property checks to compare structural values (.val)
            if (leftChildIndex < length) {
                if (this.values[leftChildIndex].val > this.values[idx].val) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                if (
                    (swap === null && this.values[rightChildIndex].val > this.values[idx].val) ||
                    (swap !== null && this.values[rightChildIndex].val > this.values[leftChildIndex].val)
                ) {
                    swap = rightChildIndex;
                }
            }
            if (!swap) break;
            [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]];
            idx = swap;
        }
    }

    insert(data) {
        this.values.push(data);
        this.bubbleUp();
    }

    delete() {
        let len = this.values.length;
        if (len === 0) return null;
        if (len === 1) return this.values.pop();
        
        // FIX 6: Your array destructuring swap works perfectly now!
        let max = this.values[0];
        this.values[0] = this.values[len - 1];
        this.values.pop();
        
        this.downify();
        return max;
    }
}
