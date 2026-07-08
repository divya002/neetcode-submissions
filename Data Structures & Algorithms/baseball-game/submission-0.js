class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack=[];
        for(let d of operations){
            if(d=='C')
            stack.pop();
            else if(d=='D'){
                stack.push(2*stack[stack.length-1])
            }else if(d=='+'){
                stack.push(stack[stack.length-1]+stack[stack.length-2])
            }else{
                stack.push(+d);
            }
        }
        return stack.reduce((a,b)=>{return a+b},0)
    }
}
