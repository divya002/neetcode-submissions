class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        if (fruits.length <= 1) return 1;
        let j = 0; //left
        let max = 0;
        let type = new Map();
        for (let i = 0; i < fruits.length; i++) {
            type.set(fruits[i], i);
            while (type.size > 2) {
                if (type.get(fruits[j]) === j) type.delete(fruits[j]);
                j++;
            }
            max = Math.max(max, i - j + 1);
        }
        return max;
    }
}
