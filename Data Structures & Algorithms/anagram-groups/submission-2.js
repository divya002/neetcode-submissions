class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    createHash(str){
        const hash ={};
        for(let char of str){
           hash[char]=(hash[char])?(hash[char]+=1):1;
        }
       // console.log(hash)
        return hash;
    }
    isEqualHash(hash1,hash2){
        if(Object.keys(hash1).length == 0 &&  Object.keys(hash2).length ==0)
        return true;
        else if(Object.keys(hash1).length !== Object.keys(hash2).length) return false;
        else{
            let isMatch=false;
            for (let key in hash1){
                if(hash1[key]!==hash2[key])return false;
                else isMatch=true;
            }
            return isMatch;
        }
    }
    groupAnagrams(strs) {
        let currentHash={};
        const result = [];
        while(strs.length){
            let tempArr=[];
            let remainingArr=[];
            let currentStr= strs.shift();
            tempArr.push(currentStr)
           currentHash=this.createHash(currentStr);
           for(let i=0;i<strs.length;i++){
                //console.log(i)
                // console.log(strs[i]);
                 let temp = this.createHash(strs[i]);
                 if(this.isEqualHash(temp,currentHash)){
                    tempArr.push(strs[i]);
                 }else{
                    remainingArr.push(strs[i]);
                 }
           }
           result.push(tempArr);
           strs= [...remainingArr];
         //  console.log(strs);
        }
        return result;
    }
}
