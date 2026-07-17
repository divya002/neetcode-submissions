class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const hash = new Set();
        let sNums = nums.sort((a, b) => a - b);
        let result = [];

        if (sNums[sNums.length - 1] < 0 || sNums[0] > 0) return [];

        // Fix: Use 'start' as a structured anchor loop outside
        for (let start = 0; start < sNums.length - 2; start++) {
            // Optional: Skip duplicate anchor values to prevent redundant loops
            if (start > 0 && sNums[start] === sNums[start - 1]) continue;

            let i = start + 1;
            let j = sNums.length - 1;

            // Your structural while loop, running on direct pointer logic
            while (i < j) {
                let sum = sNums[start] + sNums[i] + sNums[j];

                if (sum == 0) {
                    let temp = [sNums[start], sNums[i], sNums[j]];

                    // Your exact Set de-duplication tracking
                    if (!hash.has(temp.join())) {
                        result.push(temp);
                        hash.add(temp.join());
                    }

                    // FIX: When sum == 0, move BOTH pointers inward to check next pairs
                    i++;
                    j--;
                } else if (sum < 0) {
                    // FIX: If sum is too negative, you need a larger number from the left
                    i++;
                } else {
                    // FIX: If sum is too positive, you need a smaller number from the right
                    j--;
                }
            }
        }
        return result;
    }
}
