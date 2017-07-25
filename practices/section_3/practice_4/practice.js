function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let col_set = new Set([...collection_a].map(x => x[0]));
  let ans = [];
  for(let s of col_set){
    ans.push({key:s, count:0});
  }
  for(let s of collection_a){
    var step = 1;
    if(s.length>1){
        step = Number.parseInt(s.split('-')[1]);
    }
    for(let obj of ans){
      if(obj.key == s[0]){
        obj.count += step;
      }
    }
  }
  collection_a = ans;
  [...collection_a].forEach(function(x){
    if(object_b.value.find((n) => n == x.key)){
      x.count -= Math.floor(x.count/3);
    }
  });
  return collection_a;
}

module.exports = create_updated_collection;
