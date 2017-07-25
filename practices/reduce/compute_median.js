'use strict';

function compute_median(collection) {
  //在这里写入代码
  collection.sort(function(a,b){ return b-a; });
  var x = Math.floor(collection.length/2);
  if(collection.length % 2 == 0){
    return (collection[x-1] + collection[x])/2;
  }
  else{
    return collection[x];
  }
}

module.exports = compute_median;


