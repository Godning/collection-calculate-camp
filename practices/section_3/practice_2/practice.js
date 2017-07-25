function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  [...collection_a].forEach(function(x){
    if(object_b.value.find((n) => n == x.key)){
      x.count -= Math.floor(x.count/3);
    }
  });
  return collection_a;
}

module.exports = create_updated_collection;
