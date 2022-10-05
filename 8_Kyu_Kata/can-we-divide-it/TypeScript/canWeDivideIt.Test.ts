// [object Object] - Can we divide it?  [ ID: 5a2b703dc5e2845c0900005a  (can-we-divide-it) ]
// URL: https://www.codewars.com/kata/5a2b703dc5e2845c0900005a
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
import { assert } from "chai";
import { isDivideBy } from "./solution";

describe("Basic tests",function(){
  it("Testing for fixed tests", () => {
    assert.strictEqual(isDivideBy(8, 2, 4), true);
    assert.strictEqual(isDivideBy(12, -3, 4), true);
    assert.strictEqual(isDivideBy(8, 3, 4), false);
    assert.strictEqual(isDivideBy(5, 2, -2), false);
    assert.strictEqual(isDivideBy(-100, -25, 10), true);
    assert.strictEqual(isDivideBy(10000, 5, -3), false);
    assert.strictEqual(isDivideBy(4, 4, 2), true);
    assert.strictEqual(isDivideBy(5, 2, 3), false);
    assert.strictEqual(isDivideBy(-96, 25, 17), false);
    assert.strictEqual(isDivideBy(33, 1, 33), true);
  })
})

describe("Random Tests for positive integers", () => {
  
  const randomInt = (a: number, b: number): number => Math.floor(Math.random() * (b - a + 1) + a);
  
  const check = (number: number, a: number, b: number): boolean => number % a === 0 && number % b === 0;

  it("Testing for 10 random tests", () => {
    for (let i: number = 0; i < 10; i++){
      let number: number = randomInt(1, 10000);
      let a: number = randomInt(1, 4);
      let b: number = randomInt(1, 7);
      assert.strictEqual(isDivideBy(number, a, b), check(number, a, b), `Testing for isDivideBy(${number}, ${a}, ${b}`);
    }
  });
})

describe("Random Tests for negative integers", () => {
  
  const randomInt = (a: number, b: number): number => Math.floor(Math.random() * (b - a + 1) + a);
  
  const check = (number: number, a: number, b: number): boolean => number % a === 0 && number % b === 0;

  it("Testing for 10 random tests", () => {
    for (let i: number = 0; i < 10; i++){
      let number: number = randomInt(-10000, 1000);
      let a: number = randomInt(-4, -1);
      let b: number = randomInt(-7, -1);
      assert.strictEqual(isDivideBy(number, a, b), check(number, a, b), `Testing for isDivideBy(${number}, ${a}, ${b}`);
    }
  });
})

