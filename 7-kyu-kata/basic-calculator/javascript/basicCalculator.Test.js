// 7 kyu - Basic Calculator  [ ID: 5296455e4fe0cdf2e000059f  (basic-calculator) ]
// URL: https://www.codewars.com/kata/5296455e4fe0cdf2e000059f
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(calculate(3.2,"+", 8), 11.2, "3.2 + 8 = 11.2")
Test.assertEquals(calculate(3.2,"-", 8), -4.8, "3.2 - 8 = -4.8")
Test.assertEquals(calculate(3.2,"/", 8), 0.4, "3.2 / 8 = .4")
Test.assertEquals(calculate(3.2,"*", 8), 25.6, "3.2 * 8 = 25.6")
Test.assertEquals(calculate(-3,"+", 0), -3, "-3 + 0 = -3")
Test.assertEquals(calculate(-3,"-", 0), -3, "-3 - 0 = -3")
Test.assertEquals(calculate(-3,"/", 0), null, "-3 / 0 = null")
Test.assertEquals(calculate(-2, "/", -2), 1, "-2 / -2 = 1")
Test.assertEquals(calculate(-3,"*", 0), 0, "-3 * 0 = 0")
Test.assertEquals(calculate(-3,"w", 0), null, "-3 w 0 = null")
  });
});

