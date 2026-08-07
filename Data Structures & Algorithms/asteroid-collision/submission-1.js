class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];
        for (let asteriod of asteroids) {
            stack.push(asteriod);
            while (stack.length > 1 && stack[stack.length - 1] < 0 && stack[stack.length - 2] > 0) {
                let pop1 = Math.abs(stack.pop());
                let pop2 = stack.pop();
                let max = Math.max(pop1, pop2);
                max = max == pop2 ? max : -max;
                if (pop1 !== Math.abs(pop2)) stack.push(max);
            }
        }
        return stack;
    }
}
