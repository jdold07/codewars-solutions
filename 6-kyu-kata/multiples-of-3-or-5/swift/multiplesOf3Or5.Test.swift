// 6 kyu - Multiples of 3 or 5  [ ID: 514b92a657cdc65150000006  (multiples-of-3-or-5) ]
// URL: https://www.codewars.com/kata/514b92a657cdc65150000006
// Category: ALGORITHMS  |  Tags: MATHEMATICS | ALGORITHMS
// *****************************************************************************
import XCTest
import Glibc

class SolutionTest: XCTestCase {
    static var allTests = [
        ("Test From Example", testExampleSolution),
        ("Test Zero", testZero),
        ("Test Large Solutions", testLargeSolutions),
    ]

    func testExampleSolution() {
        XCTAssertEqual(solution(10), 23)
        XCTAssertEqual(solution(20), 78)
        XCTAssertEqual(solution(200), 9168)
        XCTAssertEqual(solution(300), 20850)
        XCTAssertEqual(solution(320), 23628)
    }

    func testZero() {
        XCTAssertEqual(solution(0), 0)
    }

    func testLargeSolutions() {
        XCTAssertEqual(solution(10865), 27535533)
    }
}

XCTMain([
    testCase(SolutionTest.allTests)
])
