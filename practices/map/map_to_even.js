'use strict';
function map_to_even(collection){
  return Array.from([...collection].map(x => x*2));
}
module.exports = map_to_even;
