'use strict';

function find_first_even(collection) {
  //在这里写入代码
  for(let x of collection){
    if(x % 2 == 0){
      return x;
    }
  }
}

module.exports = find_first_even;

