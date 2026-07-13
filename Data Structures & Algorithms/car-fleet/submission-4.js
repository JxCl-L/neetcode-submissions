class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((pos, i) => [pos, (target - pos)/speed[i]]);
        cars.sort((a,b)=>(b[0]-a[0])); // sort based on position, decsending number

        const fleet = [];
        for(const [pos, time] of cars){
            if(fleet.length === 0 || fleet.at(-1) < time){
                fleet.push(time);
            }
        }
        return fleet.length;
        
    }
}
