class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let negative=false;
        if(x<0){
           negative=true;
           x=x*-1;
        }
        let nums=x.toString().split('');
        let rev = nums.reverse().join('');
        if (rev < -(2 ** 31) || rev > 2 ** 31 - 1) {
            return 0;
        }
        return (negative)? -rev:+rev;
    }
}
