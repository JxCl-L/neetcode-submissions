class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(s.length < t.length)return "";
        
        const freqT = {};
        for(const char of t){
            freqT[char] = (freqT[char] || 0) + 1;
        }

        let minLen = Number.MAX_SAFE_INTEGER;
        let minRight = 0;
        let right = 0;
        let match = 0;
        const freqS = {};
        const needMatch = Object.keys(freqT).length;
        for(let i = 0; i < s.length; i++){
            const char = s[i];
            if(freqT[char]){
                freqS[char] = (freqS[char] || 0) + 1;
                if(freqT[char] === freqS[char]){
                    match ++;
                    

                }
                

                    while(right < i){
                        const testChar = s[right];
                        if(testChar in freqT && freqS[testChar] <= freqT[testChar]){
                            break;
                        }
                        if(testChar in freqT){
                            if(freqS[testChar] <= freqT[testChar]){break;}
                            freqS[testChar]--;
                        }
                        right++;
                    }
if(match===needMatch && i-right+1<minLen){
                    // console.log("updating minLen: ", minLen);
                        minLen = i-right+1;
                        minRight = right;
                        // console.log("updated minLen: ", minLen);
                }
                
            }
            // console.log("current index: ", i);
            // console.log("current char: ", s[i]);
            // console.log("current freqS: ", freqS);
            // console.log("minLen: ", minLen);
            // console.log("right: ", right);
            // console.log("mactch count: ", match, "\n");

        }
        if(match === needMatch){
            return s.substring(minRight,minRight+minLen);
        }else{return "";}
        
    }
}
