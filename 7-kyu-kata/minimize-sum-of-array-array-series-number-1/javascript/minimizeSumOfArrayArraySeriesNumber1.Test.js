// 7 kyu - Minimize  Sum Of Array (Array Series #1)     [ ID: 5a523566b3bfa84c2e00010b  (minimize-sum-of-array-array-series-number-1) ]
// URL: https://www.codewars.com/kata/5a523566b3bfa84c2e00010b
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
describe("Basic Tests", function(){
  it("should return the minimum sum", function(){
    Test.assertEquals(minSum([5,4,2,3]), 22);
    Test.assertEquals(minSum([12,6,10,26,3,24]), 342);
    Test.assertEquals(minSum([9,2,8,7,5,4,0,6]), 74);
  });
});

describe("Random Tests", function(){
  it("should return the minimum sum of random tests too", function(){
    function generateRandomTestsCases() {
    
      function minSumAfUk(arr) {
        let myArr = arr.slice().sort((a, b) => a - b);
        let sum = 0;
        for (let i = 0; i < myArr.length / 2; i++) {
          sum += myArr[i] * myArr[myArr.length - 1 - i];
        }
        return sum;
      }   
          
      // 100 random tests cases
      for (let i = 0; i < 100; i++) {
        let size = 4 + Math.floor(Math.random() * 199);
        let testArr = [];
        // Making size an even number
        if (size % 2) size--; 
        for (let j = 0; j < size; j++) {
          testArr.push(Math.floor(Math.random() * 201));
        }
        let myResult = minSumAfUk(testArr);
        Test.assertEquals(minSum(testArr), myResult);
      }
    }
    generateRandomTestsCases();
  });
});
