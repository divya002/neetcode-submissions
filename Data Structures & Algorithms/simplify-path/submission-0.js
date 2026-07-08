class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let splittedpath = path.split("/");
        let stack = [];
        for (let p of splittedpath) {
            if (p == "..") {
                stack.pop();
            } else if (p == "." || p == "") continue;
            else {
                stack.push(p);
            }
        }
        console.log(stack);
        return '/'+stack.join("/");
    }
}
