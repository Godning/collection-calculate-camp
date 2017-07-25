'use strict';
var calculate_average = function(collection){
    var sum = 0;
    var num = 0;
    for(let i=0;i<collection.length;i++){
        if((i+1) % 2 == 0){
            sum += collection[i];
            num++;
        }
    }
    return sum/num;
};
module.exports = calculate_average;
