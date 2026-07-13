class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let len = 0;
        const set = new Set();

        for(let right = 0; right < s.length; right++){
            
            while(set.has(s[right])){
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            if(set.size > len)len = set.size;
            console.log(`set:${set}, right=${right}, len=${len}`)
        }
        return len;



    }
}
