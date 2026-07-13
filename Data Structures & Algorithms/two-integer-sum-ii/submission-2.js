class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // const set = new Set(numbers);
        const hashMap = {};
        numbers.forEach((value, index) => {
            hashMap[value] = index;
        });
        for(let i = 0; i < numbers.length; i++){
            const num = numbers[i];
            if((target - num) in hashMap){
                return [i+1, hashMap[target-num]+1];
            }
        }
    }
}
