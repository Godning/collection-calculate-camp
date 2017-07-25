'use strict';
var is_exist_element = function(collection,element){
    let odd = [];
    for(let i=0;i<collection.length;i++){
        if((i+1)%2 == 0){
            odd.push(collection[i]);
        }
    }
    return odd.indexOf(element) == -1;
};
module.exports = is_exist_element;
