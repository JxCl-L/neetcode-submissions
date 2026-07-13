class StockSpanner {
    constructor() {
        this.stack = []; // decreasing price, stored with the corresponding span
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        console.log("stack ", this.stack, "| price ", price);
        let span = 1;
        let add = 0;
        while(this.stack.length && price >= this.stack[this.stack.length-1][0]){
            span += this.stack.pop()[1];
        }
        this.stack.push([price, span]);
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
