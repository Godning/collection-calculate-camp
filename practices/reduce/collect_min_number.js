'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  function min(m, x){
    return m<x?m:x;
  }
  return collection.reduce(min);
}

module.exports = collect_min_number;

