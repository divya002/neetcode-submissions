class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i = 0;
        while (i < n) {
            let j = m +i - 1;
            while (j >= 0 && nums1[j] > nums2[i]) {
                nums1[j + 1]=nums1[j];
                j--;
            }
            nums1[j + 1] = nums2[i];
            i++;
        }
    }
}
