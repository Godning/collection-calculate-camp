'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var collection = ['','a','b','c','d','e'];
  var ans = [];
  if(number_a < number_b){
    for(var i = number_a; i<= number_b; i++){
      ans.push(collection[i]);
    }
  }
  else{
    for(var i = number_a; i>= number_b; i--){
      ans.push(collection[i]);
    }
  }
  return ans;
}

module.exports = get_letter_interval;
