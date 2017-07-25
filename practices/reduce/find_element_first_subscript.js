'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  let ans = 0;
  for(let x of collection){
    if(x == element){
      return ans;
    }
    ans++;
  }
}

module.exports = calculate_elements_sum;

