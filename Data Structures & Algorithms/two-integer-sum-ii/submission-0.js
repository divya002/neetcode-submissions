class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i=0;
        let j=numbers.length-1;
    while(i<j){
        let targetSum = (numbers[i]+numbers[j]);
        if(targetSum===target){
            return [i+1,j+1];
        }
        if(targetSum>target){
            j--;
        }
         if(targetSum<target){
            i++;
        }
    }
    return []
    }
}
