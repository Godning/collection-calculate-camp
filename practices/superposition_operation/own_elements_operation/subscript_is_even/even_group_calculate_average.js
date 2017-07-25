'use strict';
var even_group_calculate_average = function(collection){
    var odd_group = [[],[],[]];
    let odd = [];
    for(let i=0;i<collection.length;i++){
        if((i+1)%2 == 0){
            odd.push(collection[i]);
        }
    }
    //collection = odd
    odd = odd.filter(n => (n % 2 == 0));
    for(let x of odd){
        if(x / 100 > 1){
            odd_group[2].push(x);
        }else if(x / 10 > 1){
            odd_group[1].push(x);
        }else{
            odd_group[0].push(x);
        }
    }
    function avg(arr){
        if(arr.length == 0){
            return [];
        }
        let sum = arr.reduce(function(total,x){return total+x;});
        return sum/arr.length;

    }
    odd_group = odd_group.map(avg);
    let ans = [];
    for(let x of odd_group){
        if(typeof x == typeof []){
            continue;
        }
        ans.push(x);
    }
    if(ans.length == 0){
        ans = [0];
    }
    return ans;

};
module.exports = even_group_calculate_average;
