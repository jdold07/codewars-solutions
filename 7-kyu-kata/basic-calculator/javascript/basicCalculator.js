// 7 kyu - Basic Calculator  [ ID: 5296455e4fe0cdf2e000059f  (basic-calculator) ]
// URL: https://www.codewars.com/kata/5296455e4fe0cdf2e000059f
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const calculate = (n, o, m) => (!"*+-/".includes(o) || (o === "/" && !m) ? null : eval(n + o + m))
