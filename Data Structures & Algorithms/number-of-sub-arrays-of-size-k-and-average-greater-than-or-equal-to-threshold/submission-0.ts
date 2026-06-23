class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr: number[], k: number, threshold: number): number {
        let sum=0;
    let count=0;
    for(let i=0;i<k;i++){
       sum+=arr[i];
    }
    if(Math.trunc(sum/k)>=threshold){count+=1;}
    for(let j=k;j<arr.length;j++){
         sum= sum- arr[j-k]+arr[j];
         if(Math.trunc(sum/k)>=threshold){count+=1;}
    }
    return count;
    }
}
