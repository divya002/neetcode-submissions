class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max= Math.max(...piles);
    let low=0;
    let result;
    while(low<=max){
        let mid = low+Math.floor((max-low)/2);
        let totalTime = 0;
        for(let pile of piles){
            totalTime+=Math.ceil(pile/mid);
        }
        if(totalTime<=h){
        result=mid
        max=mid-1;
        }
        if(totalTime>h)
        low=mid+1;
    }
    return result;
    }
}
