'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  for(let x=collection.length-1;x>0;x--){
    if(collection[x] == element){
      return x;
    }
  }
}

module.exports = calculate_elements_sum;
