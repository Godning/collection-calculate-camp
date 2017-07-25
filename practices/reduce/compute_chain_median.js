'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  collection = collection.split('->');
  collection = collection.map(Number);
  collection.sort(function(a,b){ return b-a; });
  var x = Math.floor(collection.length/2);
  if(collection.length % 2 == 0){
    return (collection[x-1] + collection[x])/2;
  }
  else{
    return collection[x-1];
  }
  
}

module.exports = compute_chain_median;
