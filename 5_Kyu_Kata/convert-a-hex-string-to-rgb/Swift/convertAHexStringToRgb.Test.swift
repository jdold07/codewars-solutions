// [object Object] - Convert A Hex String To RGB  [ ID: 5282b48bb70058e4c4000fa7  (convert-a-hex-string-to-rgb) ]
// URL: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
// Category: ALGORITHMS  |  Tags: PARSING | STRINGS | ALGORITHMS
// *****************************************************************************
import XCTest
// XCTest Spec Example:
// TODO: replace with your own tests (TDD), these are just how-to examples to get you started

class SolutionTest: XCTestCase {
    static var allTests = [
        ("testHexStringToRGB", testHexStringToRGB),
        ("testRandomHexStrings", testRandomHexStrings),
    ]

    func testHexStringToRGB() {
        XCTAssertEqual(hexStringToRGB("#FF9933"), RGB(255, 153, 51))
        XCTAssertEqual(hexStringToRGB("#beaded"), RGB(190, 173, 237))
        XCTAssertEqual(hexStringToRGB("#000000"), RGB(0, 0, 0))
        XCTAssertEqual(hexStringToRGB("#111111"), RGB(17, 17, 17))
        XCTAssertEqual(hexStringToRGB("#Fa3456"), RGB(250, 52, 86))
    }
  
    func reference(_ str:String) -> RGB {
      let nums = Array(str.dropFirst())
      let r = Int(String(nums[...1]), radix: 16)!
      let g = Int(String(nums[2...3]), radix: 16)!
      let b = Int(String(nums[4...5]), radix: 16)!
      return RGB(r, g, b)
    }
  
    func getRandomString() -> String {
      let letters = "0123456789abcdefABCDEF"
      var output = "#"
      for _ in 1...6
      {
        output += String(Array(letters)[Int.random(in: 0..<22)])
      }
      return output
    }
  
    func testRandomHexStrings() {
        for _ in 1...100
        {
          let s = getRandomString()
          XCTAssertEqual(hexStringToRGB(s), reference(s))
        }
        
    }
  
}

XCTMain([
    testCase(SolutionTest.allTests)
])
