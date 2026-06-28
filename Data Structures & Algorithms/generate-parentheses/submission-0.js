class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let openN = 0;
        let closeN = 0;
        let prths = "";
        let result = [];
        function createParenthesis(n, openN, closeN, prths) {
            if (openN == closeN && openN == n) {
                result.push(prths);
                return;
            }
            if (openN < n) {
                createParenthesis(n, openN + 1, closeN, prths + "(");
            }
            if (closeN < openN) {
                createParenthesis(n, openN, closeN + 1, prths + ")");
            }
        }
        createParenthesis(n, openN, closeN, prths);
        return result;
    }
}
