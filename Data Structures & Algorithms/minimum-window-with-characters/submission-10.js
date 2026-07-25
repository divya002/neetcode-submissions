class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let hashT = {};
        let j = 0;
        let match = 0;
        let start = 0;
        let end = 0;
        let min = Infinity;

        for (let c of t) {
            hashT[c] = (hashT[c] || 0) + 1;
        }

        for (let i = 0; i < s.length; i++) {
            if (hashT[s[i]] !== undefined) {
                if (hashT[s[i]] > 0) match++;
                hashT[s[i]]--;
            }
            while (match == t.length) {
                if (i - j + 1 < min) {
                    min = i - j + 1;
                    start = j;
                    end = i;
                }
                if (hashT[s[j]] !== undefined) {
                    hashT[s[j]]++;
                    if (hashT[s[j]] > 0) match--;
                }
                j++;
            }
        }

        let result = "";
        let matchString = () => {
            for (let i = start; i <= end; i++) {
                result += s[i];
            }
            return result;
        };
        //console.log(min);
        // console.log(start);
        //  console.log(end);
        return min == Infinity ? "" : matchString();
    }
}
