class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        let hash={};
        let result = false;
        if(((nums.length)&1)==0){
          for(let num of nums){
            hash[num]=(hash[num])?hash[num]+1:1;
          }
         // console.log(hash)
          for(let key in hash){
            //console.log(hash[key])
            if((hash[key]&1)==0){
                //console.log('true')
                result=true;
            }else{
                return false;
            }
          }
          return result;
        }else
        return false;
    }
}
