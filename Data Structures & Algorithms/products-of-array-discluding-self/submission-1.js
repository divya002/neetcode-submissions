class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        return nums.map((num,i)=>{
            let product=null;
            for(let j=0;j<nums.length;j++){
                  if(j!==i)
                  product=(product!==null)?(product*nums[j]):nums[j];
            }
            return product;
        })
    }
}
