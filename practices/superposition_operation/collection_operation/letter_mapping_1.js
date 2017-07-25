'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  function getchar(x){
    var collection = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return collection[x];
  }
  return Array.from([...collection].filter(x => (x % 2) == 0).map(x => getchar(x)));
}

module.exports = even_to_letter;
