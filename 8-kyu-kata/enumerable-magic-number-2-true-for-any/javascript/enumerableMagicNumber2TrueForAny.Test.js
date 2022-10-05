// 8 kyu - Enumerable Magic #2 - True for Any?  [ ID: 54598e89cbae2ac001001135  (enumerable-magic-number-2-true-for-any) ]
// URL: https://www.codewars.com/kata/54598e89cbae2ac001001135
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
list = [0, 1, 2, 3, 5, 8, 13]
  
Test.assertEquals(any(list, function(v){return !(v%2)}), true, "at least 1 item is even")
Test.assertEquals(any(list, function(v){return v>20}), false, "no items are greater than 20")
Test.assertEquals(any(list, function(v){return v> 0}), true, "at least 1 item is a positive integer")
Test.assertEquals(any([], function(v){return v>0}), false, "an empty list should return false")

Test.assertEquals(any([1,2,3,4], function(v){return v==4}), true, "at least 1 item equals 4")
Test.assertEquals(any([1,2,3,3], function(v){return v==4}), false, "no item equals 4")

  });
});

