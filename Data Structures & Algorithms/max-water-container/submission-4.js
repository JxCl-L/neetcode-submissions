class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length-1;
        let max = 0;
        while(left < right){
            const size = Math.min(heights[left], heights[right])*(right-left);
            if(size>max)max = size;

            if(heights[left]>heights[right]){
                right--;
            }else{
                left++;
            }
        }
        return max;
    }
}
