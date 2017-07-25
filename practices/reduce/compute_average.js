'use strict';

function compute_average(collection) {
  //在这里写入代码
  function sum(total, x){
    return total+x;
  }
  return collection.reduce(sum)/collection.length;
}

module.exports = compute_average;

