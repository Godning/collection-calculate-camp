'use strict';
var single_element = function(collection){
    let odd = [];
    for(let i=0;i<collection.length;i++){
        if((i+1)%2 == 0){
            odd.push(collection[i]);
        }
    }
    //ans = collection(odd)
    let odd_num = odd.reduce((p,k) => (p[k]++ || (p[k] = 1), p), {});
    let ans = [];
    for(let x of odd){
        if(odd_num[x] == 1){
            ans.push(x);
        }
    }
    return ans;
};
module.exports = single_element;
