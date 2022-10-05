// [object Object] - How many stairs will Suzuki climb in 20 years?  [ ID: 56fc55cd1f5a93d68a001d4e  (how-many-stairs-will-suzuki-climb-in-20-years) ]
// URL: https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
const stairsIn20 = (s) => s.reduce((a, b) => a + b.reduce((x, y) => x + y), 0) * 20
