class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let i = 0;
        let j = s.length - 1;
        let isValidPallindrone = (start, end) => {
            while (start <= end) {
                if (s[start] !== s[end]) {
                    return false;
                }
                start++;
                end--;
            }
            return true;
        };
        while (i <= j) {
            if (s[i] !== s[j]) {
                return isValidPallindrone(i + 1, j) || isValidPallindrone(i, j - 1);
            }
            i++;
            j--;
        }
        return true;
    }
}
