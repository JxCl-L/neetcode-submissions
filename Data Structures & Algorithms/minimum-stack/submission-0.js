class MinStack {
    constructor() {
        this.stack = [];
        this.minVal = []; // for getMin() O(1), cannot sort to get min
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minVal.length===0){
            this.minVal.push(val);
        }else{
            this.minVal.push(Math.min(val, this.minVal.at(-1)));
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minVal.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minVal.at(-1);
    }
}
