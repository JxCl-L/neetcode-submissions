class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // if(nums.length === 2){
        //     return [nums[1], nums[0]];
        // }

        // let product = 1;
        // let zeroCount = 0;
        // for(const num of nums){
        //     if(num === 0){
        //         zeroCount ++;
        //     }else{
        //         product = product * num;
        //     }
        // }

        // const output = [];

        // if(zeroCount >= 2){
        //     return new Array(nums.length).fill(0);
        // }else if (zeroCount === 1){
        //     for(const num of nums){
        //         if(num===0){
        //             output.push(product);
        //         }else{
        //             output.push(0);
        //         }
        //     }
        // }else{
        //     for(const num of nums){
        //         output.push(product/num)
        //     }
        // }

        // return output;

        // my solution work 
        // below is different one

        let leftStart = 1;
        const output = new Array(nums.length).fill(1);

        for(let i = 0; i < nums.length; i++){
            output[i] = leftStart;
            leftStart = leftStart * nums[i];
        }
        let rightStart =1;
        for(let i = nums.length -1; i>=0 ; i--){
            output[i] *= rightStart;
            rightStart *= nums[i];
        }
        return output;

    }
}
