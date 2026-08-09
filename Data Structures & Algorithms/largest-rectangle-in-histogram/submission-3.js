class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let leftB = new Array(heights.length).fill(-1);
        let rightB = new Array(heights.length).fill(heights.length);
        let stack = [];

        for (let i = 0; i < heights.length; i++) {
            while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
                let pop = stack.pop();
                rightB[pop] = i;
            }
            stack.push(i);
        }

        stack = [];
        for (let j = heights.length - 1; j >= 0; j--) {
            while (stack.length && heights[stack[stack.length - 1]] > heights[j]) {
                let pop = stack.pop();
                leftB[pop] = j;
            }
            stack.push(j);
        }

        let max = 0;
        for (let i = 0; i < heights.length; i++) {
            max = Math.max(max, (rightB[i] - leftB[i] - 1) * heights[i]);
        }
        return max;
    }
}
