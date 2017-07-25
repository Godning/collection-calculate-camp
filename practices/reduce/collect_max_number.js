'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  function max(m, x){
    return m>x?m:x;
  }
  return collection.reduce(max);
}

module.exports = collect_max_number;
