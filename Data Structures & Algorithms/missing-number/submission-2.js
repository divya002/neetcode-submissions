class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let sorted= nums.sort((a,b)=>{return a-b});
        for(let i=0;i<=nums.length;i++){
            if(sorted[i]!==i)
            return i;
        }
    }
}
