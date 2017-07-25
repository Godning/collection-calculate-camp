'use strict';
var even_asc_odd_desc = function(collection){
    var even = collection.filter(n => (n%2) == 1);
    even.sort(function(a,b){ return b-a;});
    var odd = collection.filter(n => (n%2) == 0);
    odd.sort(function(a,b){ return a-b;});
    return odd.concat(even);
};
module.exports = even_asc_odd_desc;
