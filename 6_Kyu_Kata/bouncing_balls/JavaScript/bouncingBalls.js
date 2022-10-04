// 6 kyu - Bouncing Balls  [ ID: 5544c7a5cb454edb3c000047  (bouncing-balls) ]
// URL: https://www.codewars.com/kata/5544c7a5cb454edb3c000047
// Category: undefined  |  Tags: PUZZLES | ALGORITHMS | MATHEMATICS
// *****************************************************************************
function bouncingBall(h,  bounce,  window) {
      let arr = []
      if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h){
        return -1
      }
      if (h * bounce < window) {
        return 1
      }
      for (let bounceHeight = h * bounce; bounceHeight > window; bounceHeight *= bounce) {
          arr.push(bounceHeight)
      }
      return 1 + (arr.length * 2)
    }
