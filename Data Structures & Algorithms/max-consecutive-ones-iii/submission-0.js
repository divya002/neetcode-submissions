class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let zero = 0;
        let j = 0;
        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 0) zero++;
            while (zero > k) {
                if (nums[j] == 0) {
                    zero--;
                }
                j++;
            }
            max = Math.max(max, i - j + 1);
        }
        return max;
    }
}
