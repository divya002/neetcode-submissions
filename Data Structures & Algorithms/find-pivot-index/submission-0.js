class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let hashP = new Map();
        let hashS = new Map();
        let p = 0;
        let s = 0;
        for (let i = 0; i < nums.length; i++) {
            hashP.set(i, p);
            hashS.set(nums.length - i - 1, s);
            p += nums[i];
            s += nums[nums.length - i - 1];
        }
        for (let i = 0; i < nums.length; i++) {
            if (hashP.get(i) === hashS.get(i)) return i;
        }
        return -1;
    }
}
