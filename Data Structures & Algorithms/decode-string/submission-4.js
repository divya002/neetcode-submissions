class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];
        for (let char of s) {
            if (char == "]") {
                let r = "";
                while (stack[stack.length - 1] !== "[") {
                    let pop = stack.pop();
                    r = pop + r;
                }
                stack.pop();
                let n = stack.pop();
                while(!isNaN(stack[stack.length-1])) {
                    console.log(n)
                    n = `${stack.pop()}${n}`
                }
                while (n > 0) {
                    stack.push(r);
                    n--;
                }
            } else {
                stack.push(char);
            }
        }
        return stack.join("");
    }
}
