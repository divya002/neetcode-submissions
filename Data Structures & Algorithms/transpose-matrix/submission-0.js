class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
        const ROWS = matrix.length,COLS = matrix[0].length;
     const result = Array.from({ length: COLS }, () => Array(ROWS).fill(0));
    for(let i=0;i<matrix.length;i++){
        let temp= matrix[i];
        for(let j=0;j<temp.length;j++){
            result[j][i]=matrix[i][j];
        }
    }
    return result;
    }
}
