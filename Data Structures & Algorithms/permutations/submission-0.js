class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [];
        let dfs = (current, nums) => {
            if (nums.length == 0) {
                result.push(current);
                return;
            }
            let rotation = 0;
            while (rotation < nums.length) {
                let temp = nums.shift();
                current.push(temp);
                dfs([...current], nums);
                nums.push(temp);
                current.pop();
                rotation++;
            }
        };
        dfs([], nums);
        return result;
    }
}
