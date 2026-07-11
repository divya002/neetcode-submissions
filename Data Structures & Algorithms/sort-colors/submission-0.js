class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let j = 1;
        while (j < nums.length) {
            let temp = nums[j];
            let k = j - 1;
            while (k >= 0 && nums[k] > temp) {
                nums[k + 1] = nums[k];
                k--;
            }
            nums[k + 1] = temp;
            j++;
        }
    }
}
