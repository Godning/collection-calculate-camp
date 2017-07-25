'use strict';
var number_map_to_word_over_26 = function(collection){
  function getchar(x){
    var collection = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var s1 = Math.floor(x/26);
    var s2 = x % 26;
    if(x % 26 == 0){
        s1 -= 1;
        s2 = 26;
    }
    return collection[s1]+collection[s2];
  }
  return Array.from([...collection].map(x => getchar(x)));
};

module.exports = number_map_to_word_over_26;
