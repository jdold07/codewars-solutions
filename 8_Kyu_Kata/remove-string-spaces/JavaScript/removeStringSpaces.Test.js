// [object Object] - Remove String Spaces  [ ID: 57eae20f5500ad98e50002c5  (remove-string-spaces) ]
// URL: https://www.codewars.com/kata/57eae20f5500ad98e50002c5
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Fixed Tests", () => {
    assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
    assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
    assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
    assert.strictEqual(noSpace('jfBm  gk lf8hg  88lbe8 '), 'jfBmgklf8hg88lbe8'); 
    assert.strictEqual(noSpace('8j aam'), '8jaam'); 
  })
})

describe("Random tests",() =>{
  
  const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
  
  function mynoSpace(x){return x.split(' ').join('')}
  
  let names=["a","b","c","d","e","f","g","h","i","j","k","l","m","n", "o", "P", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", " ", " ", " ", " ", " "];

  it("Testing for 100 random tests", () => {
    for (let i=0;i<100;i++){
      let x=[], len=randint(1,30);
      for (let k=0;k<len;k++) x.push(names[randint(0,names.length-1)]);
      x=x.join('');
      assert.strictEqual(noSpace(x),mynoSpace(x),`Testing for ${JSON.stringify(x)}`);
    }
  })
})
