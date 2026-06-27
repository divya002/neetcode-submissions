class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x: number, n: number): number {
        let isNegative = false;
        if (n == 0 || x == 1) return 1;
        if (n == 1) return x;
        if (n < 0) {
            n = n * -1;
            isNegative = true;
        }
        let res = this.myPow(x * x, Math.floor(n / 2));
        if (n % 2 !== 0) res = x * res;
        return isNegative ? 1 / res : res;
    }
}
