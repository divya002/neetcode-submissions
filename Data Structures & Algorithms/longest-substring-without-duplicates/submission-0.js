class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length==0)return 0;
    let hash = new Set([s[0]]);
     let k=1;
     let j=1;
     let max=1;
     let i=j;
     while(i<s.length){
       if(!hash.has(s[i])){
       hash.add(s[i]);
       k=k+1;
       i++;
       }
       else{
        hash=new Set([s[j]]);
        k=1;
        j=j+1;
        i=j;
       }
        max= (k<max)?max:k;
     }
     return max;
    }
}
