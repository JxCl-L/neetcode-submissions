class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // use map to write less repeatitive blocks
        const map = { ')':'(', ']':'[', '}':'{' };
        const stack = [];

        for(const char of s){
            if(char === '(' || char === '[' || char === '{'){
                stack.push(char);
            } else {
                if(stack.at(-1) !== map[char]) return false;
                stack.pop();
            }
        }
        return stack.length === 0;
    }
}
