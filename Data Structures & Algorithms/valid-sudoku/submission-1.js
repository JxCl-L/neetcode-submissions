class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: 9}, () => new Set());
        const cols = Array.from({length: 9}, () => new Set());
        const boxes = Array.from({length: 9}, () => new Set());
        for (let i = 0; i < 9; i++){
            for(let j=0; j<9; j++){
                const thisBox = board[i][j];
                if(thisBox === ".") continue;

                // let box = (i/3)*10+j/3; // => 0.33333...
                let box = Math.floor(i/3) * 3 + Math.floor(j/3);

                if(rows[i].has(thisBox)||cols[j].has(thisBox)||boxes[box].has(thisBox)){
                    return false;
                }

                rows[i].add(thisBox);
                cols[j].add(thisBox);
                boxes[box].add(thisBox);
            }
            

        }
        return true;

    }
}
