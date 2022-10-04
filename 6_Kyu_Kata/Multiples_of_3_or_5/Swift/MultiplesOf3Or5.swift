// 6 kyu - Multiples of 3 or 5  [ ID: 514b92a657cdc65150000006  (multiples-of-3-or-5) ]
// URL: https://www.codewars.com/kata/514b92a657cdc65150000006
// Category: undefined  |  Tags: MATHEMATICS | ALGORITHMS
// *****************************************************************************
func solution(_ num: Int) -> Int {
    var sum: Int = 0
    if num > 2 {
      for (i) in Array(0...(num-1)) {
        if (i % 3 == 0 || i % 5 == 0) {
          sum += i
        }
      }
    }
    return sum
  }
