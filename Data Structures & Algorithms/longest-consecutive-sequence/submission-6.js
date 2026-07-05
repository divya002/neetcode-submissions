class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count = 1;
        let result = count;
        if(nums.length==0)return 0
        nums.sort((a,b)=>{return a-b});
        for(let i=1;i<nums.length;i++){
           if((nums[i]-nums[i-1])==0){
                continue;
            }
            else if((nums[i]-nums[i-1])==1){
                count++;
            }else{
                result=Math.max(result,count);
                count=1;
            }
        }
        return Math.max(result,count);
    }
}
