'use strict';

function amount_even(collection) {

  //在这里写入代码
  function sum(total, x){
    return total + x;
  }
  return collection.filter(n => (n % 2) == 0).reduce(sum);
}

module.exports = amount_even;
