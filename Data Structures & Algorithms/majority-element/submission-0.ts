class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        return nums.sort((a,b)=>{return a-b})[nums.length>>1];
    }
}
