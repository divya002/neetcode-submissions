class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pth={
            '}':'{',
            ']':'[',
            ')':'('
        }
        const stack=[];
        for(let ch of s){
            if(ch=='}'||ch==']'||ch==')'){
                let pop = stack.pop();
                if(pop!==pth[ch])
                return false
            }else{
                stack.push(ch);
            }
        }
        return stack.length==0;
    }
}
