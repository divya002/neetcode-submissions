class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        for (let i = 0; i < heights.length; i++) {
            for (let j = heights.length-1; j > i; j--) {
                let min = Math.min(heights[i], heights[j]);
                let volume = (j - i) * min;
                max = Math.max(volume, max);
            }
        }
        return max;
    }
}
