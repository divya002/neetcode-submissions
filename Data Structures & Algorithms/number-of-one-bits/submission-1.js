class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count=0;
        while(n>1){
            if(n%2==1)count++;
            n=parseInt(n/2);
        }
        if(n==1)count++;
        return count;
    }
}
