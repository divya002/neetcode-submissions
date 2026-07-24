class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1CharCount = new Array(26).fill(0);
        let s2CharCount = new Array(26).fill(0);
        let left = 0;
        for (let s of s1) {
            let index = s.charCodeAt(0) - 97;
            s1CharCount[index]++;
        }

        for (let right = 0; right < s2.length; right++) {
            let index = s2[right].charCodeAt(0) - 97;
            s2CharCount[index]++;
            if (right - left + 1 === s1.length) {
                if (s1CharCount.join() === s2CharCount.join()) return true;
                else {
                    let index = s2[left].charCodeAt(0) - 97;
                    s2CharCount[index]--;
                    left++;
                }
            }
        }
        return false;
    }
}
