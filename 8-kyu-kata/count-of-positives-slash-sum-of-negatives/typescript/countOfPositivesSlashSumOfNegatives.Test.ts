// 8 kyu - Count of positives / sum of negatives  [ ID: 576bb71bbbcf0951d5000044  (count-of-positives-slash-sum-of-negatives) ]
// URL: https://www.codewars.com/kata/576bb71bbbcf0951d5000044
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | LISTS
// *****************************************************************************
import {countPositivesSumNegatives} from './solution';
import {assert} from "chai"

describe('Testing...', function() {
  it('basic tests', () => {
    let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
    let actual = countPositivesSumNegatives(testData)
    let expected = [10, -65]
    assert.deepEqual(actual, expected)
    
    testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
    actual = countPositivesSumNegatives(testData)
    expected = [8, -50]
    assert.deepEqual(actual, expected)
  })

  it('Wrong values tests', function() {
    assert.deepEqual(countPositivesSumNegatives(null), [])
    assert.deepEqual(countPositivesSumNegatives([]), [])
  })

  it('Random tests', function() {
    const authorSolution = function(input: any) {
      if (!input || input.length===0) return []
      const xs = input as number[];
      let sum = (xs.filter(e=>e<0).length===0)? 0: xs.filter(e=>e<0).reduce((x,y)=>x+y);
      return [xs.filter(e=>e>0).length, sum]
    }
    for (let i = 0; i < 100; i++){
      let testData: number[] = [];
      let testDataSize = Math.random()*100;
      for (let y = 0; y < testDataSize; y++) { testData.push(Math.random() * 100) }
      let expected = authorSolution(testData)
      let actual = countPositivesSumNegatives(testData)
      assert.deepEqual(actual, expected)
    }
  })
})

