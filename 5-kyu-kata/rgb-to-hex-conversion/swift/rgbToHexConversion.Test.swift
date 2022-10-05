// 5 kyu - RGB To Hex Conversion  [ ID: 513e08acc600c94f01000001  (rgb-to-hex-conversion) ]
// URL: https://www.codewars.com/kata/513e08acc600c94f01000001
// Category: ALGORITHMS  |  Tags: ALGORITHMS
// *****************************************************************************
import XCTest
import Glibc 

func rand(min: Int, max: Int) -> Int {
    guard min >= 0 && max > min else {return -1}
    let limit = (max - min) + 1
    return (random() % limit)+min
}

func rgb_ZX3YYH28(_ r: Int, _ g: Int, _ b: Int) -> String {
    return [r,g,b].map { max(min($0,255),0) }.map { String.init(format: "%02X", $0) }.joined()
}

func allPairs<T,U>(_ arr1: Array<T>, _ arr2: Array<U>) -> Array<(T,U)> {
    return arr1.flatMap { v1 in return arr2.map { v2 in return (v1,v2) } }
}

func allPairs3<T,U,V>(_ arr1: Array<T>, arr2: Array<U>, arr3: Array<V>) -> Array<(T,U,V)> {
    return allPairs(arr1, allPairs(arr2, arr3)).map { ($0,$1.0,$1.1) }
}

enum GenColor {
    case inRange, greater, less
    case value(d: Int, h: String)
    
    var color: Int {
        switch self {
        case .inRange: return rand(min: 0, max: 255)
        case .greater: return rand(min: 256, max: Int.max)
        case .less: return -rand(min: Int.min, max: -1)
        case .value(d: let d, h: _): return d
        }
    }
}

let fullRange = [GenColor.less, .inRange, .greater]
let borders = [GenColor.value(d: -1, h: "00"), .value(d: 0, h: "00"), .value(d: 255, h: "FF"), .value(d: 256, h: "FF")]
let inRange = [GenColor.inRange]

func genCase(_ rgb: (GenColor, GenColor, GenColor)) -> ((Int, Int, Int),String) {
    let r = rgb.0.color, g = rgb.1.color, b = rgb.2.color
    return ((r,g,b),rgb_ZX3YYH28(r, g, b))
}

class SolutionTest: XCTestCase {
    static var allTests = [
        ("Basic Tests", testBasic),
        ("Random in-range Tests", testNormals),
        ("Random full-range Tests", testTotal),
        ("Border Tests", testBorders)
    ]

    func testBasic() {
        XCTAssertEqual("FFFFFF", rgb(255,255,255))
        XCTAssertEqual("FFFFFF", rgb(255,255,300))
        XCTAssertEqual("000000", rgb(0,0,0))
        XCTAssertEqual("9400D3", rgb(148,0,211))
        XCTAssertEqual("9400D3", rgb(148,-20,211))
        XCTAssertEqual("90C3D4", rgb(144,195,212))
        XCTAssertEqual("D4350C", rgb(212,53,12))
    }
    
    func testNormals() {
        for _ in 1...10 {
            let ((r,g,b),expected) = genCase((GenColor.inRange, .inRange, .inRange))
            XCTAssertEqual(expected, rgb(r,g,b))
        }
    }

    func testTotal() {
        let inputs = allPairs3(fullRange, arr2: fullRange, arr3: fullRange).flatMap { [$0, $0, $0] }.map(genCase)
        for ((r,g,b),expected) in inputs { XCTAssertEqual(expected, rgb(r,g,b)) }
    }

    func testBorders() {
        let inputs = allPairs3(borders, arr2: [.inRange], arr3: [.inRange]).flatMap { [$0, $0, $0] }.map(genCase)
        for ((r,g,b),expected) in inputs { XCTAssertEqual(expected, rgb(r,g,b)) }
    }

}


XCTMain([
    testCase(SolutionTest.allTests)
])
