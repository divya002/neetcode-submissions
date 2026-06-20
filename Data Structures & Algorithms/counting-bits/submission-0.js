class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    count1(num){
     let count=0;
     while(num>0){
        num=num&num-1;
        count++;
     }
     return count;
    }
    countBits(n) {
      let result=[];
      for(let i=0;i<=n;i++){
        result.push(this.count1(i));
      }
      return result;
    }
}
