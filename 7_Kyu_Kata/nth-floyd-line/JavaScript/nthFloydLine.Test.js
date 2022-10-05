// [object Object] - nth Floyd line  [ ID: 5b096efeaf15bef812000010  (nth-floyd-line) ]
// URL: https://www.codewars.com/kata/5b096efeaf15bef812000010
// Category: REFERENCE  |  Tags: MATHEMATICS | PUZZLES | FUNDAMENTALS
// *****************************************************************************
const _ = require ('lodash')

describe("Basic tests", function(){
Test.assertEquals(nthFloyd(15),5);
Test.assertEquals(nthFloyd(26),7);
Test.assertEquals(nthFloyd(17),6);
Test.assertEquals(nthFloyd(24),7);
Test.assertEquals(nthFloyd(19),6);
Test.assertEquals(nthFloyd(5),3);
Test.assertEquals(nthFloyd(212),21);
Test.assertEquals(nthFloyd(499502),1000);
});

describe("Random tests", function(){
for (let i = 0; i < 100; i++) {
    let r = _.random(1,Math.pow(10,5));
    let exp = kj6tr(r);        
    Test.assertEquals(nthFloyd(r),exp);
    r = _.random(Math.pow(10,5),Math.pow(10,9));
    exp = kj6tr(r);        
    Test.assertEquals(nthFloyd(r),exp);   
 }  
})

function kj6tr(n){
  return Math.floor(((1+8*(n-1))**0.5+1)/2)
}
