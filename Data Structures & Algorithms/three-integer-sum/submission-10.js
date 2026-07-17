class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const hash = new Set();
        let sNums = nums.sort((a, b) => a - b);
       
        let result = [];
        let len = sNums.length - 1;
        if (sNums[len - 1] < 0 || sNums[0] > 0) return [];
        for (let start = 0; start <= len - 2; start++) {
            if (sNums[start] > 0) break;
            if (start > 0 && sNums[start] == sNums[start - 1]) continue;
            let i = start + 1;
            let j = len;
            while (i < j) {
                let sum = sNums[start] + sNums[i] + sNums[j];
                if (sum == 0) {
                    result.push([sNums[start], sNums[i], sNums[j]]);
                    while(sNums[i]==sNums[i+1])i++;
                    while(sNums[j]==sNums[j-1])j--;
                    i++;
                    j--;
                }
                else if (sum < 0) {
                    i++;
                }
                else {
                    j--;
                }
            }
        }
        return result;
    }
}
