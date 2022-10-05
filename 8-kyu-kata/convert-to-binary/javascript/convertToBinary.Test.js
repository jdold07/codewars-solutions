// 8 kyu - Convert to Binary  [ ID: 59fca81a5712f9fa4700159a  (convert-to-binary) ]
// URL: https://www.codewars.com/kata/59fca81a5712f9fa4700159a
// Category: REFERENCE  |  Tags: MATHEMATICS | ALGORITHMS | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(toBinary(1), 1);
    assert.strictEqual(toBinary(2), 10);
    assert.strictEqual(toBinary(3), 11);
    assert.strictEqual(toBinary(5), 101);  
  });
})

describe("Random Tests", function(){
 
  it("Testing for 100 random tests", () => {
    for(let i = 0;i<100;i++){
      let a = Math.floor(Math.random()*100);
      assert.strictEqual(toBinary(a), parseInt(a.toString(2)), `Testing for n = ${a}`);      
    }
  })  
});
