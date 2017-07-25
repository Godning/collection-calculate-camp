'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let ans = [];
  ans.push(number);
  do{
    number -= interval;
    var x = Math.floor((number+0.0001) * 10) / 10
    ans.push(x);
    if(x == 0){break;}
  }while(number > 0);
  return ans;
}

module.exports = spilt_to_zero;
