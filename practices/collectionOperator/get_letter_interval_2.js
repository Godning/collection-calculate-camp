'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var collection = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var ans = [];
  if(number_a < number_b){
    for(var i = number_a; i<= number_b; i++){
      var s1 = Math.floor(i/26);
      var s2 = i % 26;
      if(i % 26 == 0){
        s1 -= 1;
        s2 = 26;
      }
      ans.push(collection[s1]+collection[s2]);
    }
  }
  else{
    for(var i = number_a; i>= number_b; i--){
      var s1 = Math.floor(i/26);
      var s2 = i % 26;
      if(i % 26 == 0){
        s1 -= 1;
        s2 = 26;
      }
      ans.push(collection[s1]+collection[s2]);
    }
  }
  return ans;
}

module.exports = get_letter_interval_2;

