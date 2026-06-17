class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result= '';
        for (let str of strs){
            result = result + str.length + '#' + str;
        }
        //console.log(result)
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0;
        let result = [];
        while(i<str.length){
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let len = parseInt(str.substring(i, j));
            let temp = str.substring(j + 1, j + 1 + len);
            result.push(temp);
            i = j + 1 + len;
        }
        return result;
    }
}
