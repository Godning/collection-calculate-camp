'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  function sum(total, x){
    return total + x;
  }
  return collection.map(x => x*3+2).reduce(sum);
}

module.exports = hybrid_operation;

