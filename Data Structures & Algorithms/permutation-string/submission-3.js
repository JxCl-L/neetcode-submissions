class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
//         const f1 ={};
        // for(const char of s1)f1[char]=(f1[char] || 0)+1;

//         const f2 = {};
//         let match =0;
//         let left = 0;
//         for(let right = 0; right < s2.length; right++){
//             const val = s2[right];
//             f2[val]=(f2[val] || 0)+1;

//             if(right<s1.length){
//                 if(f1[val]===f2[val])match++;
//                 continue;
//             }

//             if(match===s1.length)return true;
//             if(match === Object.keys(f1).length)

//             if(s2[left] in f1){
//                 match --;
//                 f2[s2[left]]--;
//             }
//             left++;

            
//             if(f2[val] == f1[val]){
//                 match++;

//             }



//         }
// return false;

        // only need to have same freq for each letter
        const freq1 = {};
        for(const char of s1){freq1[char]=(freq1[char] || 0)+1;}

        const freq2 = {};
        let left = 0;
        let match = 0;

        for(let right = 0; right < s2.length; right++){
            const add = s2[right];

            freq2[add] = (freq2[add] || 0)+1;
            if(freq1[add]){
                if(freq1[add] === freq2[add]){
                    match++;
                }else if(freq1[add] === freq2[add] - 1){
                    match--;
                }
            }

            if(right-left>=s1.length){
                // 0 1 2 3
                const remove = s2[left];
                freq2[remove]--;
                left++;
                if(freq1[remove] === freq2[remove]){
                    match++;
                }else if(freq1[remove] === freq2[remove] + 1){
                    match--;
                }
            }
            if(match === Object.keys(freq1).length )return true;
            
        }
        return false;
    }
}
