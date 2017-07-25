'use strict';

function average_uneven(collection) {

  //在这里写入代码
  function sum(total, x){
    return total + x;
  }
  return collection.filter(n => (n % 2) == 1).reduce(sum)/5;
}

module.exports = average_uneven;
