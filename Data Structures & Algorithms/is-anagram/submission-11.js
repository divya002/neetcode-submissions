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
        let hashS = this.characterCount(s);
        let hashT = this.characterCount(t);
        
        for (const item in hashT) {
            //always take fasle case on place of true..it will increase iteration
            if (hashS[item] !== hashT[item]) {
                return false;
            }
        }
        return true;
    }
}
