// [object Object] - Reverse the bits in an integer  [ ID: 5959ec605595565f5c00002b  (reverse-the-bits-in-an-integer) ]
// URL: https://www.codewars.com/kata/5959ec605595565f5c00002b
// Category: REFERENCE  |  Tags: BITS | FUNDAMENTALS
// *****************************************************************************
const assert = require("chai").assert;

describe("Sample tests", function() {
  it("should work for some integers", function() {
    Test.assertEquals(reverseBits(417), 267);
    Test.assertEquals(reverseBits(267), 417); 
    Test.assertEquals(reverseBits(0), 0); 
    Test.assertEquals(reverseBits(2017), 1087); 
    Test.assertEquals(reverseBits(1023), 1023); 
    Test.assertEquals(reverseBits(1024), 1); 
    Test.assertEquals(reverseBits(Number.MAX_SAFE_INTEGER), Number.MAX_SAFE_INTEGER);   
  });
});

describe("Random tests", function() {
  it("should work for random integers", function() {
    const numberOfTests = 200;
    
    const getRandomInteger =  (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;
    const solution = (n) => parseInt(n.toString(2).split('').reverse().join(''), 2);
    
    for (let i = 0; i < numberOfTests; i++) {
      const randomInteger = getRandomInteger(0, Number.MAX_SAFE_INTEGER);
      Test.assertEquals(reverseBits(randomInteger), solution(randomInteger));
    }
   });
});
  

