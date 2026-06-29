class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let low = 0;
        let res = nums.length;
        let high = nums.length - 1;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            if (nums[mid] == target) {
                return mid;
            }
            if (nums[mid] < target) {
                low = mid + 1;
            }
            if (nums[mid] > target) {
                res = mid;
                high = mid - 1;
            }
        }
        return res;
    }
}
