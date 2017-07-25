'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  function sum(total, x){
    return total + x;
  }
  return collection.filter(n => (n % 2) == 1).map(n => n*3+5).reduce(sum);
}

module.exports = hybrid_operation_to_uneven;

