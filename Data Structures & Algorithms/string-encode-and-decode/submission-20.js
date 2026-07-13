class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";
        for(let i = 0; i < strs.length; i++){
            str += strs[i].length + "#" + strs[i]; // The # separator is also important — without it "12abc" is ambiguous: is the length 1 or 12?
        }
        console.log(`encode: ${str}`);
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let pass = 0;
        let output = [];
        let thisLength = 0;
        for(let i = 0; i < str.length; i++ ){
            if(i < pass) continue;
            if(str[i] === "#"){
                // const thisLength = Number(str.slice(pass, i));
                pass += String(thisLength).length + thisLength + 1;
                // pass = i + thisLength + 1;
                output.push(str.slice(i+1,i+1+thisLength));
                thisLength=0;
            }else{
                thisLength = thisLength*10 + Number(str[i]);
            }

        }
        return output;
    }
}
