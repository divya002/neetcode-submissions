class NumArray {
    prefix=[];
    constructor(nums: number[]) {
        this.prefix.push(nums[0]);
        for (let i=1;i<nums.length;i++){
             this.prefix.push(this.prefix[i-1]+nums[i]);
        }
    }

    sumRange(left: number, right: number): number {
        const rightSum = this.prefix[right];
        const leftSum = left > 0 ? this.prefix[left - 1] : 0;
        return rightSum - leftSum;
    }
}
