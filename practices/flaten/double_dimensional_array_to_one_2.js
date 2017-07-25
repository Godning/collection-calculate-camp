'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let ans = [];
  for(let arr of collection){
    if(typeof arr == typeof 1){
      ans.push(arr);
    }else{
      for(let item of arr){
        ans.push(item);
      }
    }
  }
  return Array.from(new Set(ans));
}

module.exports = double_to_one;
