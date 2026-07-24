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

        let isPallindrone = (a,b)=>{
            for(let i=0;i<26;i++){
                if(a[i]!==b[i])return false;
            }
            return true;
        }

        for (let right = 0; right < s2.length; right++) {
            let index = s2[right].charCodeAt(0) - 97;
            s2CharCount[index]++;
            if (right - left + 1 === s1.length) {
                if (isPallindrone(s1CharCount,s2CharCount)) return true;
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
