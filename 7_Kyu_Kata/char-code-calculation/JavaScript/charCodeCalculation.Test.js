// [object Object] - Char Code Calculation  [ ID: 57f75cc397d62fc93d000059  (char-code-calculation) ]
// URL: https://www.codewars.com/kata/57f75cc397d62fc93d000059
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | STRINGS | MATHEMATICS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Char Code Calculation", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(calc('abcdef'), 6);
    assert.strictEqual(calc('ifkhchlhfd'), 6); 
    assert.strictEqual(calc('aaaaaddddr'), 30); 
    assert.strictEqual(calc('jfmgklf8hglbe'), 6); 
    assert.strictEqual(calc('jaam'), 12); 
    assert.strictEqual(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);
  })
 
  it("Random tests",() =>{
    const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
    function mycalc(x){
     let total1 = x.split('').map(x=>x.charCodeAt(0)).join('');
     let total2 = total1.replace(/7/g,'1');
      total1=total1.split('').map(x=>x=Number(x));
      total2=total2.split('').map(x=>x=Number(x));

    return Math.abs(total1.reduce((a,b)=>a+b)-total2.reduce((a,b)=>a+b));
    }
    let names=["a","b","c","d","e","f","g","h","i","j","k","l","m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (let i=0;i<100;i++){
      let x=[], len=randint(1,8);
      for (let k=0;k<len;k++) x.push(names[randint(0,names.length-1)]);
      x=x.join('');
      assert.strictEqual(calc(x),mycalc(x), `Testing for ${JSON.stringify(x)}`);
    }
  })
})
