'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  function getchar(x){
    var collection = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return collection[x];
  }
  function sum(total, x){
    return total+x;
  }
  var x = Math.ceil(collection.reduce(sum)/collection.length);
  return getchar(x);
}

module.exports = average_to_letter;

