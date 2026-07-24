class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let hash = {};
        for (let s of s1) {
            hash[s] = (hash[s] || 0) + 1;
        }

        let temp = { ...hash };

        for (let i = 0; i < s2.length; i++) {
            hash = { ...temp };
            for (let j = i; j < i + s1.length; j++) {
                if (hash[s2[j]]) {
                    hash[s2[j]] = hash[s2[j]] - 1;
                    if (j - i + 1 == s1.length) return true;
                } else {
                    break;
                }
            }
        }
        return false;
    }
}
