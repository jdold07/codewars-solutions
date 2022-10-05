// 7 kyu - Sum of all the multiples of 3 or 5  [ ID: 57f36495c0bb25ecf50000e7  (sum-of-all-the-multiples-of-3-or-5) ]
// URL: https://www.codewars.com/kata/57f36495c0bb25ecf50000e7
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
const solution = (n) => Array.from({ length: n + 1 }).map((v, i) => i).filter(x => x % 3 === 0 || x % 5 === 0).reduce((t, s) => t + s);

Test.assertSimilar(findSum(5), 8);
Test.assertSimilar(findSum(10), 33);
Test.assertSimilar(findSum(100), 2418);
Test.assertSimilar(findSum(1000), 234168);

let rndNum = ~~(Math.random() * 100) * 100;
Test.assertSimilar(findSum(rndNum), solution(rndNum));
  });
});

