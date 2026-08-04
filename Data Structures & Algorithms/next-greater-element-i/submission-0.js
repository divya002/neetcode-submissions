class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let stack = [];
        let hash = {};
        let result = [];
        for (let n of nums2) {
            while (stack[stack.length - 1] < n) {
                let last = stack.pop();
                hash[last] = n;
            }
            stack.push(n);
        }

        for (let n of nums1) {
            result.push(hash[n] || -1);
        }
        return result;
    }
}
