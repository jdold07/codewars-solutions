// 8 kyu - Holiday VIII - Duty Free  [ ID: 57e92e91b63b6cbac20001e5  (holiday-viii-duty-free) ]
// URL: https://www.codewars.com/kata/57e92e91b63b6cbac20001e5
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(dutyFree(12, 50, 1000), 166);
    assert.strictEqual(dutyFree(17, 10, 500), 294);
    assert.strictEqual(dutyFree(24, 35, 3000), 357);
    assert.strictEqual(dutyFree(1400, 35, 10000), 20);
    assert.strictEqual(dutyFree(700, 26, 7000), 38);
  });
})

describe("Random tests",() =>{
  
  const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
  function mydutyFree(normPrice, discount, hol){return Math.floor(hol/(normPrice*(discount/100)))}
  let hea=[true, false];
  
  it("Testing for 40 random tests", () => {
    for (let i=0;i<40;i++){
      let normPrice = randint(1, 2500);
      let discount = randint(0, 95);
      let hol = randint(100, 20000);
      assert.strictEqual(dutyFree(normPrice, discount, hol), mydutyFree(normPrice, discount, hol),`Testing for ${normPrice} ${discount} and ${hol}`);
    }
  })
})
