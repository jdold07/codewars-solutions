// 7 kyu - Sum of Cubes  [ ID: 59a8570b570190d313000037  (sum-of-cubes) ]
// URL: https://www.codewars.com/kata/59a8570b570190d313000037
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
const _ = require("lodash");
chai.config.truncateThreshold=0;

describe("Sum of Cubes", () => {
  it("Fixed tests", () => {
    _.shuffle( [ 
      [1, 1], [2, 9], [3, 36], [4, 100], 
      [10, 3025], [123, 58155876] 
    ] ).forEach(([n,exp]) => assert.strictEqual(sumCubes(n), exp))  
  });

  it("Random tests", () =>{
    
    const rnd = x => ~~(Math.random()*x);
    
    let cache = {}, sumCb = x => cache[x] ? cache[x] : (cache[x]= x<2 ? x : x*x*x+sumCb(x-1));
    
    for( let i=0; i<99; i++ ){
      let n = 1+rnd(100), exp = sumCb(n);
      assert.strictEqual(sumCubes(n), exp, `Sum of cubed values from 1 to ${n}`)
    }  
  });
});
