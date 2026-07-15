class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase();
        let len = str.length;
        let i = 0;
        let j = len - 1;
        while (i < j) {
            while (i < j && !this.isAlphaNumeric(str[i])) {
                i++;
            }
            while (i < j && !this.isAlphaNumeric(str[j])) {
                j--;
            }
            if (str[i] !== str[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    isAlphaNumeric(c) {
        if (c >= "a" && c <= "z") return true;
        if (c >= "0" && c <= "9") return true;
        return false;
    }
}
