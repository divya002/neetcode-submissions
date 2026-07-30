class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
    const operator = new Set(['+', '-', '*', '/']);

    for (let token of tokens) {
        if (operator.has(token)) {
            let b = stack.pop();
            let a = stack.pop();

            if (token == '+') {
                stack.push(a + b);
            }
            if (token == '-') {
                stack.push(a - b);
            }
            if (token == '/') {
                stack.push(Math.trunc(a / b));
            }
            if (token == '*') {
                stack.push(a * b);
            }
        } else {
            stack.push(+token);
        }
    }
    return stack[0];
    }
}
