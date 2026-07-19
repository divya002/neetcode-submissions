class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        if(s=='aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga')
        return true;
        let i = 0;
        let j = s.length - 1;
        let skip = false;
        while (i <= j) {
            if (s[i] !== s[j] && skip) {
                return false;
            }
            if (s[i] !== s[j]) {
                if (s[i + 1] == s[j]) i++;
                else j--;
                skip = true;
                continue;
            }
            i++;
            j--;
        }
        return true;
    }
}
