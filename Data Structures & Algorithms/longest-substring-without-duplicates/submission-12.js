class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length<=1)return s.length;
        const sub = new Set([s[0]]);
        let left = 0;
        let maxLength = 0;

        for(let right = 1; right < s.length; right++){
            if(sub.has(s[right])){
                maxLength = Math.max(maxLength, sub.size);
                while(sub.has(s[right])){
                sub.delete(s[left]);
                left++;}

            }else{
                // sub.add(s[right]);
                //not here: even when remove when left window slide, need to add this

            }
            sub.add(s[right]);

        }
        return Math.max(maxLength, sub.size);



    }
}
