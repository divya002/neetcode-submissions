class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(height.length<=2)return 0;
        let i=0;
        let j= height.length-1;
        let leftMax=height[0];
        let rightMax= height[height.length-1];
        let result=0;
        while(i<j){
            if(leftMax<rightMax){
                i++;
                leftMax=Math.max(leftMax,height[i]);
                result+=(leftMax-height[i]);
            }else{
                j--;
                rightMax=Math.max(rightMax,height[j]);
                result+=(rightMax-height[j]);
            }
        }
        return result;
    }
}
