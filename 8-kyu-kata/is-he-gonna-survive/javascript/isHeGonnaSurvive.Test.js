// 8 kyu - Is he gonna survive?  [ ID: 59ca8246d751df55cc00014c  (is-he-gonna-survive) ]
// URL: https://www.codewars.com/kata/59ca8246d751df55cc00014c
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Fixed tests', function() {
  it("Testing for fixed tests", () => {
    assert.strictEqual(hero(10, 5), true);
    assert.strictEqual(hero(7, 4), false);
    assert.strictEqual(hero(4, 5), false);
    assert.strictEqual(hero(100, 40), true);
    assert.strictEqual(hero(1500, 751), false);
    assert.strictEqual(hero(0, 1), false);
  });
})

describe('Random tests', function() {
  
  function sol(bullets, dragons) {
    return bullets/2>=dragons;
  }

  function r_g(num){
    n = Math.random()
    return Math.round(num * (n < 0.25 ? 0.45: n < 0.5 ? 0.5: n < 0.55 ? 0.47: 0.6))
  }
  
  it("Testing for 100 random tests", () => {
    for(let i=0; i<100; i++) {
      let bullets=r_g(Math.random()*480|0);
      let dragons=r_g(bullets);
      assert.strictEqual(hero(bullets,dragons),sol(bullets,dragons), `Testing for hero(${bullets}, ${dragons})`);
    }
  })
});
