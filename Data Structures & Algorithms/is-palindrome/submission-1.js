class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length===1)return true;
        const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const mid = Math.floor(str.length/2);
        for (let i = 0; i < mid; i++){
            if(str[i] !== str[str.length-i-1])return false;
        }
        return true;
    }
}
