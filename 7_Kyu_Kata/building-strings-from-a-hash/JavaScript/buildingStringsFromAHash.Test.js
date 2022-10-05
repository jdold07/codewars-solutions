// [object Object] - Building Strings From a Hash  [ ID: 51c7d8268a35b6b8b40002f2  (building-strings-from-a-hash) ]
// URL: https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
result = solution({a: 1, b: 2})
Test.assertSimilar(result, 'a = 1,b = 2')
result = solution({b: 1, c: 2, e: 3})
Test.assertSimilar(result, 'b = 1,c = 2,e = 3')
result = solution({})
Test.assertSimilar(result, '')
  });
});

