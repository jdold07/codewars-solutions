// 8 kyu - Implement Array.prototype.filter()  [ ID: 56dd9b84fe5754786f0014f7  (implement-array-dot-prototype-dot-filter-1) ]
// URL: https://www.codewars.com/kata/56dd9b84fe5754786f0014f7
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
Test.assertSimilar([1,2,3,4].filter((num)=>{ return num > 3}), [4])
Test.assertSimilar([183,234,33,44].filter((num)=>{ return num < 183}), [33,44])
Test.assertSimilar(["123", "123123", "123123132123"].filter((num)=>{ return parseInt(num) > 123}), ["123123", "123123132123"])
Test.assertSimilar(["uuuuu", "uu"].filter((str)=>{ return str.length > 3}), ["uuuuu"])
Test.assertSimilar([].filter((num)=>{ return num > 3}), [])
Test.assertSimilar([[1,2,3,4,5,6,7], [1,2,3,4]].filter((array)=>{ return array.length > 3}), [[1,2,3,4,5,6,7], [1,2,3,4]])
Test.assertSimilar([[], [], []].filter((array)=>{ return array.length > 1}), [])
var num1 = Math.random();
var num2 = Math.random();
var num3 = Math.random();

Test.assertSimilar([num1, num2, num3].filter((num)=> {return num === num1}), [num1])
Test.assertSimilar([num1, num2, num3].filter((num)=> {return num === num2}), [num2])
Test.assertSimilar([num1, num2, num3].filter((num)=> {return num === num3}), [num3])
  });
});

