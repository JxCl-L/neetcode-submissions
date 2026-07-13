class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // in js, if-else much quicker than switch
        // switch not efficient for string cases, use for interger cases
        const stack = []; // .push .pop 
        for(const token of tokens){
            if(token==="+"){
                // const num2 = Number(stack.pop());
                // const num1 = Number(stack.pop());
                // stack.push(num1+num2);
                stack.push(stack.pop() + stack.pop());
            }else if(token === "-"){
                // const num2 = Number(stack.pop());
                // const num1 = Number(stack.pop());
                // stack.push(num1-num2);
                stack.push(0 - stack.pop() + stack.pop());
            }else if(token === "*"){
                // const num2 = Number(stack.pop());
                // const num1 = Number(stack.pop());
                // stack.push(num1*num2);
                stack.push(stack.pop() * stack.pop());
            }else if(token === "/"){
                // const num2 = Number(stack.pop());
                // const num1 = Number(stack.pop());
                // stack.push(num1/num2);
                // stack.push(Math.trunc(num1 / num2));
                stack.push(Math.trunc(1/stack.pop()*stack.pop()));
            }else{
                stack.push(Number(token));
            }
        }
        return stack[0];
    }
}
