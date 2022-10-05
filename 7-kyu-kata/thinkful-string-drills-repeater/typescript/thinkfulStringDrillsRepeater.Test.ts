// 7 kyu - Thinkful - String Drills: Repeater  [ ID: 585a1a227cb58d8d740001c3  (thinkful-string-drills-repeater) ]
// URL: https://www.codewars.com/kata/585a1a227cb58d8d740001c3
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
import { assert } from "chai";
import { repeater } from './solution';

describe("Test Cases", function(){
  it("Should work for Sample Test Cases", function() {
    assert.equal(repeater("a", 5), "aaaaa");
    assert.equal(repeater("Na", 16), "NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa");
    assert.equal(repeater("Wub ", 6), "Wub Wub Wub Wub Wub Wub ");
  });
  it("Should work for Extended Test Cases", function() {
    assert.equal(repeater("la", 2), "lala");
    assert.equal(repeater("One", 1), "One");
    assert.equal(repeater("dance\n", 3), "dance\ndance\ndance\n");
  });
  it("Should work for Random Test Cases", function() {
    for(var i = 0; i < 20; i++){
      const testStr = makeStr();
      const len = Math.floor(Math.random() * 9) + 2;
      assert.equal(repeater(testStr, len), example(testStr, len));
    }
  });
});

function example(str: string, n: number): string {
  return new Array(n+1).join(str)
}

function makeWord(min: number, max: number) {
  var array: string[] = [];
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var length = Math.ceil((Math.random() * max) + min)

  for(let i=0; i < length; i++ ) {
      array.push(possible[(Math.floor(Math.random() * possible.length))]);
  }

  return array.join("");
}

function makeStr() {
  const arrLen = Math.ceil((Math.random() * 5) + 1);
  const testArr: string[] = [];
  for (let j = 0; j < arrLen; j++) {
      testArr.push(makeWord(5, 10));
  }
  return testArr.join(" ");
}
