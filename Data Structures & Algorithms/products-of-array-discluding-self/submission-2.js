class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if(nums.length === 2){
            return [nums[1], nums[0]];
        }

        let product = 1;
        let zeroCount = 0;
        for(const num of nums){
            if(num === 0){
                zeroCount ++;
            }else{
                product = product * num;
            }
        }

        const output = [];

        if(zeroCount >= 2){
            return new Array(nums.length).fill(0);
        }else if (zeroCount === 1){
            for(const num of nums){
                if(num===0){
                    output.push(product);
                }else{
                    output.push(0);
                }
            }
        }else{
            for(const num of nums){
                output.push(product/num)
            }
        }

        return output;
    }
}
