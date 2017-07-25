'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  return Array.from(new Set([...collection_a].filter(x => !new Set(collection_b).has(x))));
}

module.exports = choose_no_common_elements;
