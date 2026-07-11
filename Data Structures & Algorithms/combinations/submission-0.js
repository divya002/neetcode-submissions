class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let result = [];
        let recursion = (start, end, temp) => {
            if (temp.length == k) {
                result.push([...temp]);
                return;
            }
            if (start > end) return;
            for (let i = start; i <= end; i++) {
                temp.push(i);
                recursion(i + 1, end, temp);
                temp.pop();
            }
        };
        recursion(1, n, []);
        return result;
    }
}
