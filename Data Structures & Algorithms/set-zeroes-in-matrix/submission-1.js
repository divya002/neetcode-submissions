class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
         let hashR = new Set();
    let hashC = new Set();
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
              if(matrix[i][j]==0){
                hashR.add(i);
                hashC.add(j);
              }
        }
    }
    //console.log(hash);
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(hashC.has(j)||hashR.has(i)){
                matrix[i][j]=0
            }
        }
    }
    }
}
