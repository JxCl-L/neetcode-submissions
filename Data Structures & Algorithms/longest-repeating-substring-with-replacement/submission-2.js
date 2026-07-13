class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        const freq = {};
        let len = 0;
        let mostFreq = s[0];


        for(let right = 0; right < s.length; right++){
            const char = s[right];
            // update freq 
            freq[char]=(freq[char] || 0)+1;
            // update mostFreq char
            if(freq[char] > freq[mostFreq]){
                mostFreq = char;
            }
            // check if no more k
            const nowLen = right - left + 1;
            const allowLen = freq[mostFreq] + k;
            if(nowLen - freq[mostFreq] <=k ){
                if(len < nowLen)len=nowLen;
            }else{
                    freq[s[left]]--;
                    left++;
                
            }

        }
        return len;



    }
}
