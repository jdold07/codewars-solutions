// [object Object] - Sum of all the multiples of 3 or 5  [ ID: 57f36495c0bb25ecf50000e7  (sum-of-all-the-multiples-of-3-or-5) ]
// URL: https://www.codewars.com/kata/57f36495c0bb25ecf50000e7
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
import XCTest

class SolutionTest: XCTestCase {
    static var allTests = [
        ("Basic Tests", basicTests),
        ("Random Tests", randomTests),
    ]

    func basicTests() {
        XCTAssertEqual(findSum(5), 8)
        XCTAssertEqual(findSum(10), 33)
        XCTAssertEqual(findSum(100), 2418)
        XCTAssertEqual(findSum(1000), 234168)
    }
    
    func randomTests() {
    
        func findSumdThI(_ n: Int) -> Int {
            var sum = 0
            for index in 0...n {
                if (index%3==0 || index%5==0) {
                    sum += index
                }
            }
            return sum
        }
    
        func rand(_ min: Int, _ max: Int) -> Int {
            return random() % (max - min) + min
        }
        for _ in 1...100 {
          let testN = rand(100, 100000)
          XCTAssertEqual(findSum(testN), findSumdThI(testN))
        }  
    }
}

XCTMain([
    testCase(SolutionTest.allTests),
])
