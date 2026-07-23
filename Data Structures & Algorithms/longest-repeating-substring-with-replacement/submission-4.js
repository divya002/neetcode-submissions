class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (s.length <= 1) return s.length;
        let j = 0;
        let max = 0;
        let count = new Array(26).fill(0);
        let fchar = 0;

        for (let i = 0; i < s.length; i++) {
            let index = s[i].charCodeAt(0) - 65;
            count[index]++;
            fchar = Math.max(count[index], fchar);
            while (i - j + 1 - fchar > k) {
                count[s[j].charCodeAt(0) - 65]--;
                j++;
            }
            max = Math.max(max, i - j + 1);
        }
        return max;
    }
}
