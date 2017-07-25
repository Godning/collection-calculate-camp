'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var x = collection[0];
  for(let i=0;i<collection.length;i++){
    if(collection[i] % 2 == 0){
      x = collection[i];
    }
  }
  return x;
}

module.exports = find_last_even;
