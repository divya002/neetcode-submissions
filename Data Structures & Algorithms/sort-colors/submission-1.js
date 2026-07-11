class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let color = [0, 0, 0];
        for (let num of nums) {
            color[num]++;
        }
        let index=0
        for(let i=0;i<3;i++){
            while(color[i]){
                nums[index]=i;
                color[i]--;
                index++;
            }
        }
    }
}
