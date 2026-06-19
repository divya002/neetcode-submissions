class Solution {
    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    rangeBitwiseAnd(left, right) {
        while(left<right){
            right&=right-1;
        }
        return right;
    }
}
