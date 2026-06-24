class NumArray {
    nums =[];
    constructor(nums: number[]) {
        this.nums= nums;
    }

    sumRange(left: number, right: number): number {
        let sum=0;
        while(left!==right){
            sum+=this.nums[left];
            left++;
        }
        return sum+this.nums[right];
    }
}
