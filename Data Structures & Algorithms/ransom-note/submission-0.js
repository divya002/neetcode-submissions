class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        let countR=new Array(26).fill(0);
        let countM=new Array(26).fill(0);
        for(let i=0;i<magazine.length;i++){
           countM[magazine[i].charCodeAt(0)-97]++
        }
        for(let i=0;i<ransomNote.length;i++){
            countR[ransomNote[i].charCodeAt(0)-97]++
        }
        for(let i=0;i<26;i++){
            if(countM[i]<countR[i])return false;
        }
        return true;
    }
}
