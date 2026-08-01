class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        let stack = [];

        for (let i = temperatures.length - 1; i >= 0; i--) {
            while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
                stack.pop();
            }
            if (stack.length) {
                //top will have max before that item.
                result[i] = stack[stack.length - 1] - i;
            }
            stack.push(i);
        }

        return result;
    }
}
