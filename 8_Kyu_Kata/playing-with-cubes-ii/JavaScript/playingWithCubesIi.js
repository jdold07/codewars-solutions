// [object Object] - Playing with cubes II  [ ID: 55c0ac142326fdf18d0000af  (playing-with-cubes-ii) ]
// URL: https://www.codewars.com/kata/55c0ac142326fdf18d0000af
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
class Cube {
    constructor(side = 0) {
      this.side = Math.abs(side)
    }
    getSide() {
      return this.side
    }
    setSide(n) {
      this.side = Math.abs(n)
    }
  }
