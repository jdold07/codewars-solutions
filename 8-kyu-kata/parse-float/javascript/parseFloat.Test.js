// 8 kyu - Parse float  [ ID: 57a386117cb1f31890000039  (parse-float) ]
// URL: https://www.codewars.com/kata/57a386117cb1f31890000039
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(parseF("1"), 1.0);
Test.assertEquals(parseF("123"), 123.0);
Test.assertEquals(parseF("2.5"), 2.5);
Test.assertEquals(parseF("one"), null);
Test.assertEquals(parseF("0"), 0);
Test.assertEquals(parseF(0), 0);
Test.assertEquals(parseF(true), null);
Test.assertEquals(parseF(false), null);
Test.assertEquals(parseF(), null);
  });
});

