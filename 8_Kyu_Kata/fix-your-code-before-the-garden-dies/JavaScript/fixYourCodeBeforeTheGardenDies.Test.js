// [object Object] - Fix your code before the garden dies!   [ ID: 57158fb92ad763bb180004e7  (fix-your-code-before-the-garden-dies) ]
// URL: https://www.codewars.com/kata/57158fb92ad763bb180004e7
// Category: REFERENCE  |  Tags: FUNDAMENTALS | DEBUGGING
// *****************************************************************************
describe("rainAmount(mm)", () => {
  it("should work for fixed tests", () => {
    Test.assertEquals(rainAmount(100), "Your plant has had more than enough water for today!");
    Test.assertEquals(rainAmount(40), "Your plant has had more than enough water for today!");
    Test.assertEquals(rainAmount(39), "You need to give your plant 1mm of water");
    Test.assertEquals(rainAmount(5), "You need to give your plant 35mm of water");
    Test.assertEquals(rainAmount(0), "You need to give your plant 40mm of water");
  });
  it("should work for random tests as well", () => {
    function solution(mm) {
      if (mm <= 39) {
         return "You need to give your plant " + (40 - mm) + "mm of water"
      }
      else {
         return "Your plant has had more than enough water for today!"
      }
    }
    var mm, actual, expected;
    for (let i = 0; i < 100; i++) {
      mm = Test.randomNumber();
      expected = solution(mm);
      actual = rainAmount(mm);
      Test.assertEquals(actual, expected);
    }
  });
});
