'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var ans = [];
  if(number_a < number_b){
    for(var i = number_a; i<= number_b; i++){
      ans.push(i);
    }
  }
  else{
    for(var i = number_a; i>= number_b; i--){
      ans.push(i);
    }
  }
  return ans;
//   var temp = [];
//   var ans = [];
//   if(number_a > number_b){
//     for(var i = 0;i < number_a - number_b ;i++){
//       temp[i] = number_a++;
//       if(temp % 2 == 0){
//         ans.push(temp);
//       }
//     }
//   } 
//   if(number_a < number_b){
//     for(var i = 0;i < number_b - number_a ;i++){
//       temp[i] = number_b--;
//       if(temp % 2 == 0){
//         ans.push(temp);
//       }
//     }
//   }
//   if(number_a = number_b){
//     ans[i] = number_a;
//   }
//   return ans;
}

module.exports = get_integer_interval;

