'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let col_set = new Set(collection);
  let ans = {};
  for(let s of col_set){
    let key = s + '';
    ans[key] = 0;
  }
  for(let s of collection){
    let key = s + '';
    ans[key]++;
  }
  return ans;
}

module.exports = grouping_count;
