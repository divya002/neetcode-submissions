class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let reverse = 0;
        let lastBit=31;
        while(n&&lastBit>=0){
            if(n&1==1){
                reverse = reverse + (1 << lastBit)
            }
            n=n>>1;
            lastBit--;
        }
        //used to convert any value into a standard unsigned 32-bit integer
        return reverse >>>0;
    }
}
