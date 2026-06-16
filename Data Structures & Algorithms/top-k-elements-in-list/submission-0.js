class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = {};
        const result = [];
        for(let num of nums){
            hash[num]=(hash[num])?(hash[num]+1):1;
        }
        let entries = Object.entries(hash);
        entries=entries.sort((a,b)=>{
            return b[1]-a[1]
        })
        for(let i=0;i<k;i++){
            result.push(entries[i][0]);
        }
        return result;
    }
}

