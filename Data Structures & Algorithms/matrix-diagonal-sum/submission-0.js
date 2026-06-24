class Solution {
    /**
     * @param {number[][]} mat
     * @return {number}
     */
    diagonalSum(mat) {
        let res = 0,
            n = mat.length;

        for (let r = 0; r < n; r++) {
            res += mat[r][r];
            res += mat[r][n - r - 1];
        }

        return (
            res - (n % 2 == 1 ? mat[Math.floor(n / 2)][Math.floor(n / 2)] : 0)
        );
    }
}
