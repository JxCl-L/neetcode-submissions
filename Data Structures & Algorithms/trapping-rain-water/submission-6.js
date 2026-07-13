class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // const set = new Set(height);

        // const heights = {};
        // for(let i = 0; i < height.length; i++){
        //     if(height[i]===0)continue;
        //     if(!heights[height[i]]){
        //         heights[height[i]] = [i];
        //     }else{
        //         heights[height[i]].push(i);
        //     }
        // }

        // let water = 0;

        // for(const [key, value] of heights){
        //     if(value.length === 1)continue;
        //     const maxValue = Math.max(...value);
        //     const minValue = Math.min(...value);
        //     water += key*(maxValue - minValue - value.length +1)
        // }
        // return water;
        // too complicated
        // simple and more direct: two pointers
        // for each col, water = min(maxLeft,maxRight) - thisHeight

        let left = 0;
        let right = height.length-1;
        let maxLeft = height[0], maxRight = height[right];
        let water = 0;
        while(left<right){
            if(height[left]<height[right]){
                left++;
                if(height[left]>maxLeft){
                    maxLeft = height[left];
                }else{
                    water += maxLeft - height[left];
                }        
            }else{
                right--;
                if(height[right]>maxRight){
                    maxRight = height[right];
                }else{
                    water += maxRight - height[right];
                }
            }

        }
        return water;




    }
}
