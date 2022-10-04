// 7 kyu - Speed Control  [ ID: 56484848ba95170a8000004d  (speed-control) ]
// URL: https://www.codewars.com/kata/56484848ba95170a8000004d
// Category: undefined  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
const gps = (s, x) =>
  Math.floor((x.reduce((a, c, i) => (x.length > 1 && a > x[++i] - c ? a : (a = x[i] - c || a)), 0) * 3600) / s)
