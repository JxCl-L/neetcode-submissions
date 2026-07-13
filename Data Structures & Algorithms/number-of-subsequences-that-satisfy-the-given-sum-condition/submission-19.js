class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    numSubseq(nums, target) {
        
        nums.sort((a, b) => a - b);
        const MOD = 1e9 + 7;
        const pow2 = Array(nums.length).fill(1);
        for (let i = 1; i < nums.length; i++) {
            pow2[i] = (pow2[i - 1] * 2) % MOD;
        }

        let count = 0;
        let min = 0;
        let max = nums.length-1;
        while(min <= max){

            while(nums[min]+nums[max]>target){
                max--;
            }
            if(min>max)break;
            console.log("min max",min,max,"count", count, "+", max-min+2);
            // solution 1
            // count =(count + 2**(max-min))% MOD;
                // The issue is JavaScript number precision
                // For huge numbers like 2**80, and JS cannot represent all integers exactly.
                // Then: (count + hugeNumber) % MOD can be slightly wrong.
            
            // solution 2
            // let add = 1;
            // for (let i = 0; i < max-min; i++) {
            //     add = add * 2 % MOD;
            // }
            // count = (count + add) % MOD;
                // correct but bit slow
                // repeatedly recalculates 2^15 2^14 2^13 again and again
            
            // solution 3: having pow2 calculated before
            count = (count + pow2[max - min]) % MOD;

            min++;
        }
        return count;
        
        
    }
}
