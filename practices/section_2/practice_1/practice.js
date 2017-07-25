function count_same_elements(collection) {
  //在这里写入代码
  let col_set = new Set(collection);
  let ans = [];
  for(let s of col_set){
    ans.push({key:s, count:0});
  }
  for(let s of collection){
    for(let obj of ans){
      if(obj.key == s){
        obj.count++;
      }
    }
  }
  return ans;
}

module.exports = count_same_elements;
