// [object Object] - Function 3 - multiplying two numbers  [ ID: 523b66342d0c301ae400003b  (function-3-multiplying-two-numbers) ]
// URL: https://www.codewars.com/kata/523b66342d0c301ae400003b
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
import XCTest
// XCTest Spec Example:
// TODO: replace with your own tests (TDD), these are just how-to examples to get you started

class SolutionTest: XCTestCase {
    static var allTests = [
        ("Test Example", testExample),
    ]

    func testExample() {
        let actual = 1
        XCTAssertEqual(actual, 1)
    }

    func testExample2() {
        let actual = multiply(3,3)
        XCTAssertEqual(actual, 9)
    }
}

XCTMain([
    testCase(SolutionTest.allTests)
])
