class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let columns = matrix[0].length;

        let search = (row) => {
            for (let i = 0; i < columns; i++) {
                if (matrix[row][i] == target) return true;
            }
            return false;
        };
        for (let i = 0; i < rows; i++) {
            if (matrix[i][columns - 1] >= target) {
                return search(i);
            }
        }

        return false;
    }
}
