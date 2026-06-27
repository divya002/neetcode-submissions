class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        let isNegative = false;
        if (n == 0) return 1;
        if (n < 0) {
            n = n * -1;
            isNegative = true;
        }
        let result = x;
        for (let i = 1; i < n; i++) {
            result = result *= x;
        }
        return isNegative ? 1 / result : result
    }
}
