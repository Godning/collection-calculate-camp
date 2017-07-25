'use strict';
var map_to_three_multiples = function(collections){
  return Array.from([...collections].map(x => x*3));
};

module.exports = map_to_three_multiples;
