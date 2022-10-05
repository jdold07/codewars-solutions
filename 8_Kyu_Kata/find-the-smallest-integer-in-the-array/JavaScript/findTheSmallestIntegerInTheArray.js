// [object Object] - Find the smallest integer in the array  [ ID: 55a2d7ebe362935a210000b2  (find-the-smallest-integer-in-the-array) ]
// URL: https://www.codewars.com/kata/55a2d7ebe362935a210000b2
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.reduce((a,b) => b < a ? a = b : a)
    }
  }
// *****************************************************************************
// *****************************************************************************
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.reduce((a,b) => (a > b) ? a = b : a)
    }
  }

