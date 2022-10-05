// [object Object] - Nth Root of a Number  [ ID: 5520714decb43308ea000083  (nth-root-of-a-number) ]
// URL: https://www.codewars.com/kata/5520714decb43308ea000083
// Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
describe("root", function(){
  let assertFuzzyEquals = function(actual, expected, msg){
    let inrange = Math.abs((actual - expected) / expected) <= 1e-12;
    Test.expect(inrange,
      msg || "Expected value near " + expected.toExponential(13) +
             ", but got " + actual.toExponential(13)
    );
  };
  for (let i = 0; i < 50; i++) {
    let x = random(4, 1e20);
    let n = random(4, 50);
    it("should work for the " + n + "th root of " + x, () => {
      assertFuzzyEquals(root(x,n), __root(x,n));
    });
  }
});

function __root(x, n) {
  return Math.pow(x, 1/n);
}

function random(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}
