'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  let flag = true;
  for(let i=0;i<collection_a.length;i++){
    if(collection_a[i] != collection_b[i]){
      flag = false;
      break;
    }
  }
  return flag;
}

module.exports = compare_collections;


