class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let i = 0;
        const len = s.length;
        const pending = [];
        for(let i = 0; i< len; i++){
            if(s[i] === "{" || s[i] === "(" || s[i] === "[")pending.push(s[i]);
            if(s[i] === "}"){
                if(pending.at(-1)!=="{"){
                    return false;
                }else{
                    pending.pop();
                    continue;
                } 
            }
            if(s[i] === "]"){
                if(pending.at(-1)!=="["){
                    return false;
                }else{
                    pending.pop();
                    continue;
                } 
            }
            if(s[i] === ")"){
                if(pending.at(-1)!=="("){
                    return false;
                }else{
                    pending.pop();
                    continue;
                } 
            }
        }
        return pending.length===0;
    }
}
