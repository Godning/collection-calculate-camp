'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  return Array.from(new Set([...collection_b].filter(x => new Set(collection_a).has(x))));
}

module.exports = get_intersection;
