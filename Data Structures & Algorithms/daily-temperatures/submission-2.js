class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = []; // store indices of warmer not found
        // in which, temparature can only be decreasing, as increasing means warmer found

        for(let i = 0; i < temperatures.length; i++){

            while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
                result[stack[stack.length-1]] = i - stack[stack.length-1];
                stack.pop();
            }
            stack.push(i);

        }
        return result;
    }
}
