class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        for(let i=0;i<nums.length;i++){
            if(nums.length==1)return 0;
            if(i==0 && nums[i]>nums[i+1])return 0;
            if(i==nums.length-1 && nums[i]>nums[i-1])return i;
            if(nums[i]>nums[i+1] && nums[i]>nums[i-1])
            return i;
        }
        return 
    }
}
