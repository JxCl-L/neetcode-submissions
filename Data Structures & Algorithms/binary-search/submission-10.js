class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        
        if(nums.length === 1){
            return nums[0]===target? 0 : -1;
        }
        
        let min = 0;
        let max = nums.length-1;
        while(max >= min){
            // if(target === nums[min])return min;
            // if(target === nums[max])return max;
            const mid = Math.floor((max+min)/2);
            // console.log("max=",max);
            // console.log("min=",min);
            // console.log("mid=",mid);
            if(target < nums[mid]){
                max = mid-1;
            }else if(target > nums[mid]){
                min = mid+1;
            }else{
                return mid;
            }
        }
        return -1;
    }
}
