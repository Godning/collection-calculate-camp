function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let A = new Set(collection_a);
  for(let B of collection_b){
    A = new Set([...A].filter(x => new Set(B).has(x)));
  }
  return Array.from(A);
}

module.exports = collect_same_elements;
