class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums=nums.sort();
        let result = [];
        let set = new Set();
        let dfs = (nums, index, subset, result) => {
            if (index == nums.length) {
                if (set.has(subset.join())) return;
                else {
                    set.add(subset.join());
                    result.push(subset);
                    return;
                }
            }
            subset.push(nums[index]);
            dfs(nums, index + 1, [...subset], result);
            subset.pop();
            dfs(nums, index + 1, [...subset], result);
        };
        dfs(nums, 0, [], result);
        return result;
    }
}
