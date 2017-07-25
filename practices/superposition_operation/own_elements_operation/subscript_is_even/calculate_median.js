'use strict';
var calculate_median = function(collection){
    var ans = [];
    var num = 0;
    for(let i=0;i<collection.length;i++){
        if((i+1) % 2 == 0){
            ans.push(collection[i]);
            num++;
        }
    }
    var x = Math.floor(num/2);
    if(num % 2 == 0){
        return (ans[x-1]+ans[x])/2;
    }else{
        return ans[x];
    }
};
module.exports = calculate_median;
