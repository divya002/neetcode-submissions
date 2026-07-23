class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0;
        let min = nums.length + 1;
        let currentSum = 0;

        for (let r = 0; r < nums.length; r++) {
            currentSum += nums[r];
            while (currentSum >= target) {
                min = Math.min(min, r - l + 1);
                currentSum -= nums[l];
                l++;
            }
        }
        return min == nums.length + 1 ? 0 : min;
    }
}
