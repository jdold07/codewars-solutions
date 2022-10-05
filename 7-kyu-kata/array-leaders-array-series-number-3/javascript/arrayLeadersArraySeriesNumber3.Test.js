// 7 kyu - Array Leaders (Array Series #3)  [ ID: 5a651865fd56cb55760000e0  (array-leaders-array-series-number-3) ]
// URL: https://www.codewars.com/kata/5a651865fd56cb55760000e0
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
const {assert} = require("chai");

describe('Basic Tests', function(){
  it('Positive Values', function(){
    assert.deepEqual(arrayLeaders([1,2,3,4,0]), [4]);
    assert.deepEqual(arrayLeaders([16,17,4,3,5,2]), [17,5,2]);
  });
  it('Negative Values', function(){
    assert.deepEqual(arrayLeaders([-1,-29,-26,-2]), [-1]);
    assert.deepEqual(arrayLeaders([-36,-12,-27]),  [-36,-12]);
  });
  it('Mixed Values', function(){
    assert.deepEqual(arrayLeaders([5,-2,2]), [5,2]);
    assert.deepEqual(arrayLeaders([0,-1,-29,3,2]),  [0,-1,3,2]);
  });
});

describe("Random tests", () => {
  it("", () => {
    const r = n => Math.floor(Math.random() * n);
    const rArray = n => Array.from({length: r(n) + 3}, _ => r(1000) - r(1000));

    const sum = arr => arr.reduce((a,b)=> a+b,0);
    const arrayLeadersCorrect = numbers => numbers.reduce((a,b,i)=> b > sum(numbers.slice(i+1)) ? [...a, b] : a, []);

    for(let i=1; i<101; i++){
      const arr = rArray(200);
      assert.deepEqual(arrayLeaders(arr.slice()), arrayLeadersCorrect(arr.slice()), `For input: ${JSON.stringify(arr)}`);
    }
  });
});
