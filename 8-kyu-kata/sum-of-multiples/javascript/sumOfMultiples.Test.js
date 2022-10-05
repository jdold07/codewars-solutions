// 8 kyu - Sum of Multiples  [ ID: 57241e0f440cd279b5000829  (sum-of-multiples) ]
// URL: https://www.codewars.com/kata/57241e0f440cd279b5000829
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function(){
  it("should test", function() {
    assert.strictEqual(sumMul(0,0),"INVALID");
    assert.strictEqual(sumMul(2,9),20);
    assert.strictEqual(sumMul(4,-7),"INVALID");
    assert.strictEqual(sumMul(4,123),1860);
    assert.strictEqual(sumMul(123,4567),86469);
  });
});

describe("Random Tests", function(){

function sumMulSolv(n,m){
  if(n <= 0 ||  m <=  0){
    return "INVALID";
  } else {
    let sum=0;
    for(let i = 1; (n*i) < m; i++){
      sum += n*i;
    }
    return sum;
  }
}


for(let i = 0; i < 100; i++) {
  let n = ~~(Math.random() * 1000);
  let m = ~~(Math.random() * 1000000);
  it("Testing for n = " + n + " and m = " + m, function() {
    assert.strictEqual(sumMul(n,m), sumMulSolv(n,m));
  });    
}

});
