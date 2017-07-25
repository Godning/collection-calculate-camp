'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  function getchar(x){
    var scollection = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var s1 = Math.floor(x/26);
    var s2 = x % 26;
    if(x % 26 == 0){
        s1 -= 1;
        s2 = 26;
    }
    return scollection[s1]+scollection[s2];
  }
  collection.sort(function(a,b){ return b-a; });
  var x = Math.floor(collection.length/2);
  if(collection.length % 2 == 0){
    return getchar(Math.ceil((collection[x-1] + collection[x])/2));
  }
  else{
    return getchar(collection[x]);
  }
}

module.exports = median_to_letter;
