class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let setNums = new Set(nums);
        let result = 0;
        for (let num of setNums) {
            if (!setNums.has(num - 1)) {
                let len=1;
                while(setNums.has(num+len)){
                    len++
                }
                result=Math.max(result,len);
            } 
        }
        return result;
    }
}
