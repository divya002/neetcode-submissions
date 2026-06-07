class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    characterCount(s) {
        let hash = {};
        for (let char of s) {
            if (hash[char]) {
                hash[char] += 1;
            } else {
                hash[char] = 1;
            }
        }
        return hash;
    }
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let isAnalgram = false;
        let hashS = this.characterCount(s);
        let hashT = this.characterCount(t);
        if (Object.keys(hashS).length !== Object.keys(hashT).length) {
            return false;
        }
        for (let item in hashS) {
            if (hashS[item] == hashT[item]) {
                isAnalgram = true;
            } else {
                isAnalgram = false;
            }
        }
        return isAnalgram;
    }
}
