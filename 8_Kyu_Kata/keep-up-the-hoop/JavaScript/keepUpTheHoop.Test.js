// [object Object] - Keep up the hoop  [ ID: 55cb632c1a5d7b3ad0000145  (keep-up-the-hoop) ]
// URL: https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Your Solution", function () {
  it("should work for some example tests", function () {
    // The existing test cases - they really should belong to the "Example Tests" provided to the user
    // and not the actual test cases required for completing this Kata
    Test.assertEquals(hoopCount(6), "Keep at it until you get it");
    Test.assertEquals(hoopCount(10), "Great, now move on to tricks");
    Test.assertEquals(hoopCount(22), "Great, now move on to tricks");
  });
  it("should work for some fixed tests", function () {
    Test.assertEquals(hoopCount(1), "Keep at it until you get it");
    Test.assertEquals(hoopCount(2), "Keep at it until you get it");
    Test.assertEquals(hoopCount(3), "Keep at it until you get it");
    Test.assertEquals(hoopCount(4), "Keep at it until you get it");
    Test.assertEquals(hoopCount(5), "Keep at it until you get it");
    Test.assertEquals(hoopCount(7), "Keep at it until you get it");
    Test.assertEquals(hoopCount(8), "Keep at it until you get it");
    Test.assertEquals(hoopCount(9), "Keep at it until you get it");
    Test.assertEquals(hoopCount(11), "Great, now move on to tricks");
    Test.assertEquals(hoopCount(12), "Great, now move on to tricks");
    Test.assertEquals(hoopCount(13), "Great, now move on to tricks");
    Test.assertEquals(hoopCount(14), "Great, now move on to tricks");
    Test.assertEquals(hoopCount(15), "Great, now move on to tricks");
    Test.assertEquals(hoopCount(16), "Great, now move on to tricks");
    Test.assertEquals(hoopCount(17), "Great, now move on to tricks");
    Test.assertEquals(hoopCount(18), "Great, now move on to tricks");
    Test.assertEquals(hoopCount(19), "Great, now move on to tricks");
    Test.assertEquals(hoopCount(20), "Great, now move on to tricks");
    Test.assertEquals(hoopCount(100), "Great, now move on to tricks");
    Test.assertEquals(hoopCount(1e3), "Great, now move on to tricks");
    Test.assertEquals(hoopCount(1e4), "Great, now move on to tricks");
  });
  it("should also work for randomly generated test cases at runtime", function () {
    function solution(n) {
      return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
    }
    for (let i = 0; i < 100; i++) {
      var randomHoops = 1 + ~~(Math.random() * 100);
      var expected = solution(randomHoops);
      var actual = hoopCount(randomHoops);
      Test.assertEquals(actual, expected);
    }
  });
});

