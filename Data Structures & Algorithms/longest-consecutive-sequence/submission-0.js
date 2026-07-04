class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let result=0;
        nums=nums.sort((a,b)=>{return a-b});
        for(let i=0;i<nums.length;i++){
            let count = 1;
            let current= nums[i];
            for(let j=0;j<nums.length;j++){
                if(nums[j]-current==1){
                    count++;
                    current=nums[j];
                }
            }
            result=Math.max(result,count);
        }
        return result;
    }
}
