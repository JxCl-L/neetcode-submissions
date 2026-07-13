class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (const num of nums){
            for (let index = 0; index < nums.length - 1; ++index) {
    const element = nums[index];
    for (let inner = index + 1; inner < nums.length; ++inner){
        if (nums[inner] === element){
            return true;
        }
    }

}
        }
        return false;
    }
}
