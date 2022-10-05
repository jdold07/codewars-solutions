// [object Object] - Substituting Variables Into Strings: Padded Numbers  [ ID: 51c89385ee245d7ddf000001  (substituting-variables-into-strings-padded-numbers) ]
// URL: https://www.codewars.com/kata/51c89385ee245d7ddf000001
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution(5),"Value is 00005")
    assert.strictEqual(solution(1204),"Value is 01204")
    assert.strictEqual(solution(109),"Value is 00109")
    assert.strictEqual(solution(0),"Value is 00000")
    })
  })

describe("Random tests", () => {  
   
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  for(let i = 0; i < 100; i++){
    let n = randint(0, 10**randint(1, 5))
    let expected = `Value is ${(""+n).padStart(5, "0")}`
    it(`solution(${n}) should equal ${JSON.stringify(expected)}`, () => {
      assert.strictEqual(solution(n), expected);
    });
  }
})
