class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isPowerOfTwo(n: number): boolean {
        if(n<=0)return false;
        if(n==1) return true;
        if(n%2==1) return false;
        return this.isPowerOfTwo(n>>1);
    }
}
