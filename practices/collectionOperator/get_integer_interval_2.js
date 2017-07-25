'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var ans = [];
  if(number_a < number_b){
    for(var i = number_a; i<= number_b; i++){
      if(i % 2 == 0){ ans.push(i);}
    }
  }
  else{
    for(var i = number_a; i>= number_b; i--){
      if(i % 2 == 0){ ans.push(i);}
    }
  }
  return ans;
}

module.exports = get_integer_interval_2;
