class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        // nums1 as array: index match value
        // change to: match value to index
        // why: in nums 2 have value, look for value as key O(n)
        const nums1Idx = {};
        nums1.forEach((num, i)=> {nums1Idx[num] = i});

        const result = new Array(nums1.length).fill(-1);
        const stack = []; // decreasing => when found greater, pop all top < the greater
        for(const n2 of nums2){
            

            while(stack.length && stack[stack.length-1]<n2){
                // const val = ;
                const idx = nums1Idx[stack.pop()];
                result[idx] = n2;
            }
            // if(n2 in nums1)stack.push(n2); // n2 in nums1 check if n2 is a valid index in nums1 not value check
            if (n2 in nums1Idx) stack.push(n2);
        }
        return result;
    }
}
