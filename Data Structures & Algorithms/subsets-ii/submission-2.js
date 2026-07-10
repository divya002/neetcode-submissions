class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result = [];
        nums=nums.sort();
        let dfs = (nums, index, subset) => {
            if (index == nums.length) {
                result.push(subset);
                return;
            }
            subset.push(nums[index]);
            dfs(nums, index + 1, [...subset]);
            subset.pop();
            while(index+1<nums.length && nums[index]==nums[index+1]){
                index++;
            }
            dfs(nums, index + 1, [...subset]);
        };
        dfs(nums, 0, []);
        return result;
    }
}
