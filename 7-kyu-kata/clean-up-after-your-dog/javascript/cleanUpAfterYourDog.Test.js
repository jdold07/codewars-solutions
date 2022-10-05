// 7 kyu - Clean up after your dog  [ ID: 57faa6ff9610ce181b000028  (clean-up-after-your-dog) ]
// URL: https://www.codewars.com/kata/57faa6ff9610ce181b000028
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS | MATHEMATICS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Clean up after your dog", () => {
  it("Fixed tests", () => {
    assert.strictEqual(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2), "Clean");
    assert.strictEqual(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1), "Cr@p");
    assert.strictEqual(crap([['_','_'], ['_','@'], ['D','_']], 2, 2), "Dog!!");
  });
  
  it("Random tests",() =>{
    const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
    function mycrap(x, bags, cap){
      let my = x.reduce((prev, curr)=> prev.concat(curr));
      if (my.join('').replace(/[^D]/g,'').length>0) return "Dog!!";
      else return my.join('').replace(/_/g,'').length>bags*cap?'Cr@p':'Clean';
    }
    let names=["@", "_", "_", "_", "_", "_", "_", "@", "_", "_", "_", "_", "_", "_", "D"];

    for (let i=0;i<100;i++){
      let x=[], a=[], b=[], c=[], len=randint(1,35), bags = randint(0,9), cap=randint(0,9);
      for (let k=0;k<len;k++) {
        a.push(names[randint(0,names.length-1)]);
        b.push(names[randint(0,names.length-1)]);
        c.push(names[randint(0,names.length-1)]);
      }
      x.push(a, b, c);
      let ref = mycrap(x, bags, cap)
      assert.strictEqual(crap(x.slice(), bags, cap), ref, `Testing for ${JSON.stringify(x)}, ${bags} and ${cap}`);
    }
  })
})
