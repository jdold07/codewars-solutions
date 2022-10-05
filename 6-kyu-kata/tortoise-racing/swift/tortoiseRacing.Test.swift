// 6 kyu - Tortoise racing  [ ID: 55e2adece53b4cdcb900006c  (tortoise-racing) ]
// URL: https://www.codewars.com/kata/55e2adece53b4cdcb900006c
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS | ALGORITHMS
// *****************************************************************************
import XCTest
import Glibc // for random()

// XCTest Spec Example:
// TODO: replace with your own tests (TDD), these are just how-to examples to get you started

class SolutionTest: XCTestCase {
    static var allTests = [
        ("race", testExample),
        ("Random Examples", randomExample),
    ]

    func testing(_ v1: Int, _ v2: Int, _ g: Int, _ expected: [Int]?) {
        XCTAssert(race(v1, v2, g)! == expected!, "should return \(expected!)")
    } 
    func testingNil(_ v1: Int, _ v2: Int, _ g: Int) {
        XCTAssertTrue(race(v1, v2, g) == nil, "Should return nil")
    } 

    func testExample() {       
        testing(720, 850, 70, [0, 32, 18])
        testing(80, 91, 37, [3, 21, 49])
        testing(80, 100, 40, [2, 0, 0])
        testing(720, 850, 37, [0, 17, 4])
        testing(720, 850, 370, [2, 50, 46])
        testing(120, 850, 37, [0, 3, 2])
        testing(820, 850, 550, [18, 20, 0])
        testingNil(820, 81, 550)
        testingNil(100, 81, 550)

        testing(735, 784, 62, [1, 15, 55])
        testing(615, 739, 148, [1, 11, 36])
        testing(180, 708, 148, [0, 16, 49])
        testing(246, 760, 106, [0, 12, 22])
        testing(64, 842, 98, [0, 7, 33])
        testing(176, 420, 145, [0, 35, 39])
        testing(106, 174, 75, [1, 6, 10])
        testing(279, 314, 77, [2, 12, 0])
        testing(58, 147, 150, [1, 41, 7])
        testing(193, 421, 110, [0, 28, 56])
        testing(697, 741, 82, [1, 51, 49])
        testing(455, 643, 71, [0, 22, 39])
        testing(285, 480, 145, [0, 44, 36])
        testing(586, 746, 91, [0, 34, 7])
        testing(459, 769, 68, [0, 13, 9])
        testing(256, 461, 139, [0, 40, 40])
        testing(510, 715, 130, [0, 38, 2])
        testing(210, 486, 138, [0, 30, 0])
        testing(338, 823, 65, [0, 8, 2])
        testing(541, 654, 84, [0, 44, 36])
        testingNil(100, 10, 55)

        testing(306, 428, 100, [0, 49, 10])
        testing(654, 761, 87, [0, 48, 47])
        testing(250, 533, 110, [0, 23, 19])
        testing(570, 712, 71, [0, 30, 0])
        testing(629, 809, 112, [0, 37, 20])
        testing(670, 850, 90, [0, 30, 0])
        testing(140, 370, 90, [0, 23, 28])
        testing(468, 758, 67, [0, 13, 51])
        testing(514, 534, 64, [3, 12, 0])
        testing(328, 715, 114, [0, 17, 40])
        testing(587, 747, 102, [0, 38, 15])
        testing(192, 702, 113, [0, 13, 17])
        testing(584, 781, 123, [0, 37, 27])
        testing(91, 573, 131, [0, 16, 18])
        testing(361, 520, 102, [0, 38, 29])
        testing(301, 632, 91, [0, 16, 29])
        testing(510, 762, 122, [0, 29, 2])
        testing(653, 741, 121, [1, 22, 30])
        testing(359, 717, 125, [0, 20, 56])
        testing(485, 545, 136, [2, 16, 0])
        testing(344, 828, 74, [0, 9, 10])
        testing(730, 787, 105, [1, 50, 31])
        testing(83, 595, 96, [0, 11, 15])
        testing(371, 673, 144, [0, 28, 36])
        testing(379, 721, 118, [0, 20, 42])
        testing(382, 482, 120, [1, 12, 0])
        testing(388, 807, 75, [0, 10, 44])
        testing(707, 828, 78, [0, 38, 40])
        testing(335, 844, 115, [0, 13, 33])
        testing(407, 591, 140, [0, 45, 39])
        testing(691, 837, 97, [0, 39, 51])
        testing(304, 356, 102, [1, 57, 41])
        testing(372, 730, 125, [0, 20, 56])
        testing(336, 648, 64, [0, 12, 18])
        testing(654, 827, 86, [0, 29, 49])
        testing(575, 669, 113, [1, 12, 7])
        testing(193, 638, 70, [0, 9, 26])
        testing(608, 762, 137, [0, 53, 22])
        testing(140, 403, 102, [0, 23, 16])
        testing(169, 474, 90, [0, 17, 42])
        testing(150, 332, 146, [0, 48, 7])
        testing(243, 270, 117, [4, 20, 0])
        testing(219, 419, 150, [0, 45, 0])
        testing(611, 755, 112, [0, 46, 40])
        testing(526, 560, 69, [2, 1, 45])
        testing(713, 806, 135, [1, 27, 5])
        testing(578, 621, 69, [1, 36, 16])
        testing(717, 791, 109, [1, 28, 22])
        testing(466, 600, 75, [0, 33, 34])
        testing(735, 837, 122, [1, 11, 45])
        testing(196, 525, 134, [0, 24, 26])
        testing(287, 545, 135, [0, 31, 23])
        testing(244, 704, 107, [0, 13, 57])
        testing(739, 762, 107, [4, 39, 7])
        testing(147, 366, 64, [0, 17, 32])
        testing(521, 787, 147, [0, 33, 9])
        testing(156, 714, 65, [0, 6, 59])
        testing(645, 842, 88, [0, 26, 48])
        testing(55, 221, 60, [0, 21, 41])
        testing(702, 777, 143, [1, 54, 24])
        testing(324, 748, 128, [0, 18, 6])
        testing(610, 795, 107, [0, 34, 42])
        testing(324, 406, 77, [0, 56, 20])
        testing(214, 602, 115, [0, 17, 47])
        testing(486, 692, 138, [0, 40, 11])
        testing(84, 439, 122, [0, 20, 37])
        testing(386, 796, 83, [0, 12, 8])
        testing(391, 539, 146, [0, 59, 11])
        testing(312, 772, 77, [0, 10, 2])
        testing(68, 389, 103, [0, 19, 15])
        testing(327, 731, 68, [0, 10, 5])
        testing(314, 827, 143, [0, 16, 43])
        testing(429, 762, 109, [0, 19, 38])
        testing(715, 813, 63, [0, 38, 34])
        testing(747, 840, 100, [1, 4, 30])
        testing(218, 242, 81, [3, 22, 30])
        testing(622, 675, 90, [1, 41, 53])
        testing(577, 602, 109, [4, 21, 36])
        testing(356, 531, 111, [0, 38, 3])
        testing(160, 759, 131, [0, 13, 7])
        testingNil(1000, 800, 55)
    }
    
    func randomExample() {
        func rand(_ min: Int, _ max: Int) -> Int {
            return random() % (max - min) + min
        }
        func raceBIV(_ v1: Int, _ v2: Int, _ g: Int) -> [Int]? {
          if v2 < v1 { return nil }
          let ts: Double = Double(g) * 3600.0 / Double(v2 - v1)
          let tm: Int = Int(ts / 60)
          return [tm / 60, tm % 60, Int(ts) % 60]
        }        
        for _ in 1...10 {
            let v1 = rand(50, 750)
            let v2 = rand(v1 + 20, 850)
            let g = rand(60, 150)
            let sol = raceBIV(v1, v2, g)
            if sol != nil {
                testing(v1, v2, g, sol)
            } else {testingNil(v1, v2, g)}
        }
    }
}

XCTMain([
    testCase(SolutionTest.allTests)
])
