// 7 kyu - Currying functions: multiply all elements in an array  [ ID: 586909e4c66d18dd1800009b  (currying-functions-multiply-all-elements-in-an-array) ]
// URL: https://www.codewars.com/kata/586909e4c66d18dd1800009b
// Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING | FUNDAMENTALS
// *****************************************************************************
const mySolution =
  array => 
    n => 
      array.map(e => e * n);
      
describe ("must return an array", function () {
  Test.expect(Array.isArray(multiplyAll([1])(1)));
});

describe ("array has correct length", function () {
  Test.expect(multiplyAll([1, 2])(1).length === 2, "array should have the same length as the array passed in as an argument");
});

describe ("returned array has correct values", function () {
  Test.assertSimilar(multiplyAll([1, 2, 3])(1), [1, 2, 3]);
  Test.assertSimilar(multiplyAll([1, 2, 3])(2), [2, 4, 6]);
  Test.assertSimilar(multiplyAll([1, 2, 3])(0), [0, 0, 0]);
  Test.assertSimilar(multiplyAll([])(10), [], "should return an empty array");
});

// random tests
const randomArray = () => {
  let l = Math.floor(Math.random() * 10);
  let arr = Array(l).fill(0).map(() => Math.floor(Math.random() * 100));
  return arr;
}

const randomInteger = () => Math.floor(Math.random() * 100);

describe ("random tests", function () {
  for (let i = 0; i < 20; i++) {
    let a = randomArray();
    let n = randomInteger();
    Test.assertSimilar(multiplyAll(a.slice())(n), mySolution(a)(n));
  }
});

