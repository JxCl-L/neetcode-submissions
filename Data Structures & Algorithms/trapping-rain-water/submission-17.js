class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // follow Claude demo to do myself
        // https://claude.ai/chat/a271edc8-1400-4bb0-85ce-6c3d7e620747
        let water = 0;
        const stack = []; // store height INDEX, which value are decreasing
        for(let i = 0; i < height.length; i++){
            // console.log("check index:height ", i, ":", height[i]);
            while(stack.length && height[stack[stack.length-1]] < height[i]){
                // console.log("stack = ", stack);
                const bottomIdx = stack.pop();
                if(!stack.length)break;
                const h = Math.min(height[i], height[stack[stack.length-1]]) - height[bottomIdx];
                const w = i - stack[stack.length-1] - 1;
                water += w*h;
                // console.log("water updated: ", water);

            }
            stack.push(i);
            // console.log("stack updated: ", stack);
        }
        return water;
    }
}
