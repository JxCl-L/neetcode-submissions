class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []; // .push .pop 
        for(const token of tokens){
            if(token==="+"){
                const num2 = Number(stack.pop());
                const num1 = Number(stack.pop());
                stack.push(num1+num2);
            }else if(token === "-"){
                const num2 = Number(stack.pop());
                const num1 = Number(stack.pop());
                stack.push(num1-num2);
            }else if(token === "*"){
                const num2 = Number(stack.pop());
                const num1 = Number(stack.pop());
                stack.push(num1*num2);
            }else if(token === "/"){
                const num2 = Number(stack.pop());
                const num1 = Number(stack.pop());
                // stack.push(num1/num2);
                stack.push(Math.trunc(num1 / num2));
            }else{
                stack.push(Number(token));
            }
        }
        return stack[0];
    }
}
