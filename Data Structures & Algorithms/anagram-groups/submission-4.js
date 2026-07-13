class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // if(strs.length === 1)return [strs];

        // const count = {};

        // for (let i = 0; i < strs.length; i++){
        //     console.log(`check ${strs[i]}`)
        //     const countThis = {};
        //     for (const char of strs[i]){
        //         console.log(`check ${char}`)
        //         if(!countThis[char]){
        //             countThis[char] = 1;
        //         } else {countThis[char]++;}
        //         console.log(`check ${countThis}`)
        //     }
        //     if(!count[countThis]){
        //         count[countThis] = [strs[i]];
        //     }else{
        //         count[countThis].push(strs[i]);
        //     }
        // }
        // const output = [];
        // for (const [key, value] of count) {
        //     output.push[value];
        // }
        // return output;
        // why not work?
        // 1. declare hash map by {} => key must be string, cannot be object
        // even if declare hash map by new Map() still not work: Map compares object keys by reference, not by value!
        // 2. for (const [key, value] of count) // ❌ count is a plain object, not iterable => to make iterable use Object.entries(count) to return [key, value] pairs as an array

        if(strs.length===1)return [strs];

        const count = {};
        for(let i = 0; i < strs.length; i++){
            const key = strs[i].split("").sort().join("");
            if(!count[key]){
                count[key] = [strs[i]];
            } else {
                count[key].push(strs[i]);
            }
        }
        const output = [];
        for (const [key, value] of Object.entries(count)){
            output.push(value);
        }
        return output;
    }
}
