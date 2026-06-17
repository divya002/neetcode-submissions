class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product=null;
        let withoutProduct=null;
        let count=0;
        for(let num of nums){
            product=(product==null)?num:product*num;
            if(num!=0)
            withoutProduct=(withoutProduct==null)?num:withoutProduct*num;
            if(num==0){
                count+=1;
            }
        }
        if(count>1){
            return nums.map(num=>{return 0})
        };
        return nums.map(num=>{
            if(num==0){
                return (withoutProduct/(num||1))
            }
            return (product/(num||1))
        });
    }
}
