class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = [];
        let stack = [];

        for (let i = temperatures.length - 1; i >= 0; i--) {
            let j = 0;
            let notfound = true;
            while (j < stack.length) {
                if (temperatures[stack[j]] > temperatures[i]) {
                    result.unshift(stack[j] - i);
                    notfound = false;
                    break;
                }
                j++;
            }
            if (notfound) result.unshift(0);
            while (stack.length && temperatures[stack[0]] <= temperatures[i]) {
                stack.shift();
            }
            stack.unshift(i);
        }

        return result;
    }
}
