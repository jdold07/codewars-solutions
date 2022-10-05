// 7 kyu - Number Of Occurrences  [ ID: 52829c5fe08baf7edc00122b  (number-of-occurrences) ]
// URL: https://www.codewars.com/kata/52829c5fe08baf7edc00122b
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
var arr = [0,5,5,2,"c", "a", "aba", "a"];
Test.assertEquals(arr.numberOfOccurrences(0), 1);
Test.assertEquals(arr.numberOfOccurrences(4), 0);
Test.assertEquals(arr.numberOfOccurrences(5), 2);
Test.assertEquals(arr.numberOfOccurrences("c"), 1);
Test.assertEquals(arr.numberOfOccurrences("a"), 2);
  });
});

