class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    memo=[];
    climbStairs(n) {
        if (n <= 1) return 1;
        if (this.memo[n]) return this.memo[n];
        this.memo[n] = this.climbStairs(n - 1) + this.climbStairs(n - 2);
        return this.memo[n];
    }
}
