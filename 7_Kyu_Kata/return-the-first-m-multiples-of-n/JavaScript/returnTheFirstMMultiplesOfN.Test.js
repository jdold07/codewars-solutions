// [object Object] - Return the first M multiples of N  [ ID: 593c9175933500f33400003e  (return-the-first-m-multiples-of-n) ]
// URL: https://www.codewars.com/kata/593c9175933500f33400003e
// Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
describe("Kata Tests",function(){
  describe("Basic Tests", function(){
    Test.assertDeepEquals(multiples(3, 5), [5, 10, 15])
    Test.assertDeepEquals(multiples(1, 3.14), [3.14])
    Test.assertDeepEquals(multiples(5, -1), [-1, -2, -3, -4, -5])
  });
  describe("Random Tests", function(){
    function multiples_test(m, n){
      result = [];
      for(let i = 1; i <= m; i++) result.push(n * i);
      return result;
    }
    
    for(let i = 0; i < 100; i++){
      let m = Math.round(Math.random() * 100), n = Math.round(Math.random() * 50);
      Test.assertDeepEquals(multiples(m, n), multiples_test(m, n))
    }
  });
});
