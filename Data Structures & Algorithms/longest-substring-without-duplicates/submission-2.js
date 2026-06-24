class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let mp = new Map();
        let l=0;
        let res=0;
        for(let i=0;i<s.length;i++){
            if(mp.has(s[i])){
                l= Math.max(mp.get(s[i])+1,l);
            }
            mp.set(s[i],i);
            res= Math.max(res,i-l+1)
        }
        return res;
    }
}
