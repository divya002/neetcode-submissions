class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let max = nums[0];
        let result = [];
        let j = 0;

        for (let i = k; i <= nums.length; i++) {
            max = nums[j];
            for (let d = j; d < i; d++) {
                max = Math.max(max, nums[d]);
            }
            result.push(max);
            j++;
           // console.log(j)
           // console.log(i)
        }
        return result;
    }
}
