'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.filter(n => (n % 2) == 1).map(n => n*3+2);
}

module.exports = hybrid_operation_to_uneven;

