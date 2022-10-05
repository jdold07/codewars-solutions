// 7 kyu - Filter the number  [ ID: 55b051fac50a3292a9000025  (filter-the-number) ]
// URL: https://www.codewars.com/kata/55b051fac50a3292a9000025
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
let p17b9fe10e8d57952934e977b31da3c78 = function(g54) { return +g54.split('').filter(c => !isNaN(c)).join(''); };
let k748h4f = '';

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  let j = s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
  k748h4f = p17b9fe10e8d57952934e977b31da3c78(j);
  return j;
}

describe('Fixed Tests', () => {
  Test.assertEquals(FilterString("123"), 123, 'Just return the numbers');
  Test.assertEquals(FilterString("a1b2c3"), 123, 'Just return the numbers');
  Test.assertEquals(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');
});

describe('Random Tests', () => {
  for(let i4839rf8u = 0; i4839rf8u<50;i4839rf8u++){
    Test.assertEquals(FilterString(guid()), k748h4f, 'Just return the numbers');
  }
});
