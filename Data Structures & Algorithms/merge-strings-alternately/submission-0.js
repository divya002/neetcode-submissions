class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result = "";
        let i = 0,
            j = 0;
        let w1 = word1.length;
        let w2 = word2.length;
        while (i < w1 || j < w2) {
            if (word1[i]) {
                result += word1[i];
                i++;
            }
            if (word2[j]) {
                result += word2[j];
                j++;
            }
        }
        return result;
    }
}
