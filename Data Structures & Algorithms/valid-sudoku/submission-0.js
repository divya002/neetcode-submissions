class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowHash = {};
        const columnHash = {};
        const squareHash = {};

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] == ".") continue;
                let squareKey = `${Math.floor(i / 3)}${Math.floor(j / 3)}`;
                if (
                    (rowHash[i] && rowHash[i][board[i][j]]) ||
                    (columnHash[j] && columnHash[j][board[i][j]]) ||
                    (squareHash[squareKey] && squareHash[squareKey][board[i][j]])
                )
                    return false;
                    if(rowHash[i]){
                       rowHash[i][board[i][j]]=true;
                    }else{
                        rowHash[i]={};
                        rowHash[i][board[i][j]]=true;
                    }
                    if(columnHash[j]){
                       columnHash[j][board[i][j]]=true;
                    }else{
                        columnHash[j]={};
                        columnHash[j][board[i][j]]=true;
                    }
                    if(squareHash[squareKey]){
                       squareHash[squareKey][board[i][j]]=true;
                    }else{
                        squareHash[squareKey]={};
                        squareHash[squareKey][board[i][j]]=true;
                    }
            }
        }
        return true;
    }
}
