class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0;
        const stack = [];
        stack.push(-1);
        // increasing order => pop if top < current h
        // starting from a col1,
        // 1. if right col2 h2 >= h1,
        // => col1 can widen its reactangle to left, col1 push to stack
        // 2. if meet col3 h3 < h1,
        // => col1's rectangle stop by col3, col1 pop from stack
        // => calculate space for col1's rectangle (col3-col1)*h1
        for (let i = 0; i < heights.length; i++) {
            while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
                const index = stack.pop();
                // const w = i - index;
                const w = i - stack[stack.length - 1] - 1;
                // for col 1=1 2=4 3=3 4=2
                // when try 4=2, stack be [1,3] where 2 poped
                // now pop 3, calculate 3 s
                // for 3, h = 3, w != 4-3 = 1 as col of 3 can also use col 2
                // => w = 4 - 1(from stack top after 3 poped) -1 = 2

                const h = heights[index];
                const s = w * h;
                max = s > max ? s : max;
            }
            stack.push(i);
        }
        while (stack.length >= 1) {
            const index = stack.pop();
            const w = heights.length - stack[stack.length-1] -1;
            const h = heights[index];
            const s = w * h;
            max = s > max ? s : max;
        }
        return max;
    }
}
