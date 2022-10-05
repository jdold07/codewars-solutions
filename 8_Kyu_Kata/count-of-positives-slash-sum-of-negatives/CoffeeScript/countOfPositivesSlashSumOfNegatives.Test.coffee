# [object Object] - Count of positives / sum of negatives  [ ID: 576bb71bbbcf0951d5000044  (count-of-positives-slash-sum-of-negatives) ]
# URL: https://www.codewars.com/kata/576bb71bbbcf0951d5000044
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | LISTS
# ******************************************************************************
describe("Example tests", () ->
    testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
    actual = countPositivesSumNegatives(testData)
    expected = [10, -65]

    Test.assertDeepEquals(actual, expected)
    
    testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
    actual = countPositivesSumNegatives(testData)
    expected = [8, -50]
    
    Test.assertDeepEquals(actual, expected)
)

describe("Wrong values tests", () ->
    testData = null
    actual = countPositivesSumNegatives(testData)

    Test.assertDeepEquals(actual, [])
    
    testData = []
    actual = countPositivesSumNegatives(testData)
    
    Test.assertDeepEquals(actual, [])
)

describe("100 Random Tests", () ->
    solution = (input) ->
        result = []
        if input == null or input.length == 0
            return result
        result.push(0)
        result.push(0)
        for i in [0...input.length]
            if input[i] > 0
                result[0]++
            else
                result[1] += input[i]
        return result

    for i in [0...100]
        testData = []
        testDataSize = Math.random()*100
        for j in [0...testDataSize]
            testData.push(Math.random() * 100)
        expected = solution(testData)
        actual = countPositivesSumNegatives(testData)    
        Test.assertDeepEquals(actual, expected)
        testData = []
)
