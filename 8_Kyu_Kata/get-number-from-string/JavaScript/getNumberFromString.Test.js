// [object Object] - Get number from string  [ ID: 57a37f3cbb99449513000cd8  (get-number-from-string) ]
// URL: https://www.codewars.com/kata/57a37f3cbb99449513000cd8
// Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
// *****************************************************************************
function solution(s) {
  return parseInt(Array.from(s).filter(x => /\d/.test(x)).join(''));
}

describe("Basic tests", function() {
  it("should work as expected", function() {
    Test.assertSimilar(getNumberFromString("1"), 1);
    Test.assertSimilar(getNumberFromString("123"), 123);
    Test.assertSimilar(getNumberFromString("this is number: 7"), 7);
    Test.assertSimilar(getNumberFromString("$100 000 000"), 100000000);
    Test.assertSimilar(getNumberFromString("hell5o wor6ld"), 56);
    Test.assertSimilar(getNumberFromString("one1 two2 three3 four4 five5"), 12345);
  });
});

describe("Random tests", function() {
  it("should work as expected", function() {
    for(let i = 0; i < 10; i++) {
      let s = Test.randomToken() + Test.randomNumber() + Test.randomToken();
      Test.assertSimilar(getNumberFromString(s), solution(s));
    }
  });
});
