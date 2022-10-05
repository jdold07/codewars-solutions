// 8 kyu - Grasshopper - Grade book  [ ID: 55cbd4ba903825f7970000f5  (grasshopper-grade-book) ]
// URL: https://www.codewars.com/kata/55cbd4ba903825f7970000f5
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function getGrade (s1, s2, s3) {
    const avg = (s1 + s2 + s3) / 3
    return avg >= 90 ? "A" : avg >= 80 ? "B" : avg >= 70 ? "C" : avg >= 60 ? "D" : "F"
  }
