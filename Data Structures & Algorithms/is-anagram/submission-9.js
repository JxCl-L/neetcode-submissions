class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if(s.length !== t.length)return false;

        // for(const char1 of s){
        //     for(const char2 of t){
        //         if(char1 === char2){
        //             t = t.replace(char2, "");
        //             console.log(`remove ${char2} from t`)
        //             console.log("t: ", t)
        //             break;
        //         }
                
        //     }
        // }
        // if(t===""){return true} else {return false};
        // error: memory excceed => solution: early exit

// add early exit if char not found
    //     if(s.length !== t.length) return false;

    // for(const char1 of s){
    //     let found = false;
    //     for(const char2 of t){
    //         if(char1 === char2){
    //             t = t.replace(char2, "");  // ✅ reassign
    //             found = true;
    //             break;
    //         }
    //     }
    //     if(!found) return false;  // ✅ early exit if char not found
    // }

    // return t === "";


    // best solution so far: use key value pair
    if(s.length !== t.length)return false;

    const count = {};

    for(const char of s){
        if(count[char]){
            count[char]++;
        }else{count[char] = 1}
        
    }

    for (const char of t){
        if (count[char]){
            count[char]--;

        }else{
            return false;
        }
    }
    return true;
    }
}
