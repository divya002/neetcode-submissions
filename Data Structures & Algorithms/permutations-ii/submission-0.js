class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let result = [];
        nums = nums.sort();
        let dfs = (current, nums) => {
            if (nums.length == 0) {
                result.push(current);
                return;
            }
            let rotation = 0;
            let last = null;
            while (rotation < nums.length) {
                let temp = nums.shift();
                if (temp == last) {
                    nums.push(temp);
                    rotation++;
                    continue;
                }
                current.push(temp);
                dfs([...current], nums);
                nums.push(temp);
                current.pop();
                rotation++;
                last = temp;
            }
        };
        dfs([], nums);
        return result;
    }
}
