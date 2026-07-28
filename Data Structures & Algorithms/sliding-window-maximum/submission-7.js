class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];
        let dequeue = [];
        let j = 0;

        for (let i = 0; i < nums.length; i++) {
            if (dequeue.length && dequeue[0] < i - k + 1) {
                dequeue.shift();
            }
            while (dequeue.length >= 1 && nums[dequeue[dequeue.length - 1]] < nums[i]) {
                dequeue.pop();
            }
            dequeue.push(i);
            if (i - j + 1 == k) {
                result.push(nums[dequeue[0]]);
                j++;
            }
        }
        return result;
    }
}
