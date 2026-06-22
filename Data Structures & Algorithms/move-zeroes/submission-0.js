class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let slow=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            [nums[i],nums[slow]]=[nums[slow],nums[i]];
            slow++;
        }
    }
    return nums;
    }
}
