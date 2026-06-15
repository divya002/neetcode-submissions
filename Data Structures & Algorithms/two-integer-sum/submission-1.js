class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let store={};
        for (let i=0;i<nums.length;i++){
            store[nums[i]]=i;
        }
        for(let j=0;j<nums.length;j++){
            let searchNum= target - nums[j];
            if(store[searchNum] && store[searchNum]!==j){
                return (store[searchNum]<j)?[store[searchNum],j]:[j,store[searchNum]];
            }
        }
    }
}
