class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
    const stack = []; // stores indices, decreasing heights
    let water = 0;
    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[stack[stack.length - 1]] < height[i]) {
            const bottom = stack.pop();
            if (stack.length === 0) break; // no left wall, water spills
            const left = stack[stack.length - 1];
            const width = i - left - 1;
            const boundedHeight = Math.min(height[left], height[i]) - height[bottom];
            water += width * boundedHeight;
        }
        stack.push(i);
    }
    return water;
}
}
