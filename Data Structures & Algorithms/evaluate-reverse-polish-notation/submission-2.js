class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operator = new Set(["+", "-", "*", "/"]);

        for (let token of tokens) {
            if (operator.has(token)) {
                let b = stack.pop();
                let a = stack.pop();
                switch (token) {
                    case "+":
                        stack.push(a + b);
                        break;
                    case "-":
                        stack.push(a - b);
                        break;
                    case "*":
                        stack.push(a * b);
                        break;
                    case "/":
                        stack.push(Math.trunc(a / b));
                        break;
                    default:
                        break;
                }
            } else {
                stack.push(+token);
            }
        }
        return stack[0];
    }
}
