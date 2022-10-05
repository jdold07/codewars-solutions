// [object Object] - Count of positives / sum of negatives  [ ID: 576bb71bbbcf0951d5000044  (count-of-positives-slash-sum-of-negatives) ]
// URL: https://www.codewars.com/kata/576bb71bbbcf0951d5000044
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | LISTS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
  it("Testing for fixed test 1", () => {
    let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let actual = countPositivesSumNegatives(testData);
    let expected = [10, -65];
    assert.deepEqual(actual, expected);
  })
    
  it("Testing for fixed test 2", () => {
    let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    let actual = countPositivesSumNegatives(testData);
    let expected = [8, -50];    
    assert.deepEqual(actual, expected);
  });

  it("Testing for wrong test 1", () => {
    let testData = null;
    let actual = countPositivesSumNegatives(testData);
    assert.deepEqual(actual, []);
  })
   
  it("Testing for wrong test 2", () => {
    let testData = [];
    let actual = countPositivesSumNegatives(testData);    
    assert.deepEqual(actual, []);
  });
});

describe("Random Tests", () => {
   function solution(input) {
        let result = [];

        if (input == null || input.length == 0)
        {
            return result;
        }
        
        result.push(0);
        result.push(0);
        
        for(let i = 0; i < input.length; i++)
        {
            if (input[i] > 0)
            {
                result[0]++;
            }
            else
            {
                result[1] += input[i];
            }
        }
        
        return result;
    }
  
    it("Testing for 100 random tests", () => {
      for (let i = 0; i < 100; i++)
      {
          let testData = [];

          let testDataSize = Math.floor(Math.random()*100);

          for (let y = 0; y < testDataSize; y++)
          {
              testData.push(Math.floor(Math.random() * 100) * (Math.random() < 0.5 ? 1 : -1));
          }

          let expected = solution(testData);
          let actual = countPositivesSumNegatives(testData);        
          assert.deepEqual(actual, expected, `Testing for input = ${JSON.stringify(testData)}`);
      }
    });
});
