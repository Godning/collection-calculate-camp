'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  collection.sort(function(a,b){return a-b;});
  for(let i=0;i<collection.length-3;i+=3){
    let tmp = collection[i];
    collection[i] = collection[i+1];
    collection[i+1] = collection[i+2];
    collection[i+2] = tmp;
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
