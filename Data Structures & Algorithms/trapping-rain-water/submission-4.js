class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || height.length < 3) return 0;
        let result = 0;
        let max = height[0];
        let currentTrap = 0;
        let count = 0;
        let maxIndex = 0;
        for (let i = 1; i < height.length; i++) {
            if (height[i] >= max) {
                let temp = max * count - currentTrap;
                result += temp;
                max = height[i];
                currentTrap = 0;
                maxIndex = i;
                count = 0;
            } else {
                currentTrap += height[i];
                count++;
            }
        }
            currentTrap = 0;
            count = 0;
            max = height[height.length - 1];
            for (let j = height.length - 2; j >= maxIndex; j--) {
                if (height[j] >= max) {
                    let temp = max * count - currentTrap;
                    result += temp;
                    max = height[j];
                    currentTrap = 0;
                    count = 0;
                } else {
                    currentTrap += height[j];
                    count++;
                }
            }
        
        return result;
    }
}
