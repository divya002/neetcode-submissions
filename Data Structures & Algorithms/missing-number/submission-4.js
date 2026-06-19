class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let sorted= nums.sort((a,b)=>{return a-b});
        let len= nums.length;
        for(let i=0;i<=len;i++){
            if(sorted[i]!==i)
            return i;
        }
    }
}
