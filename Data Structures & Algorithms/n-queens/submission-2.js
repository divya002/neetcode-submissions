class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let result = [];
        //prepare board
        let board = Array.from({ length: n }, () => Array(n).fill("."));

        const solve = (row) => {
            //break condition
            if (row == n) {
                result.push(board.map((row) => row.join("")));
                return;
            }
            //for each col item of each row
            for (let col = 0; col < n; col++) {
                if (this.isValid(row, col, board)) {
                    board[row][col] = "Q";
                    solve(row + 1);
                    //backtrack
                    board[row][col] = ".";
                }
            }
        };
        solve(0);
        return result;
    }

    isValid(row, col, board) {
        //upward check
        for (let i = row - 1; i >= 0; i--) {
            if (board[i][col] == "Q") return false;
        }
        //right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
            if (board[i][j] == "Q") return false;
        }
        //left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == "Q") return false;
        }

        return true;
    }
}
