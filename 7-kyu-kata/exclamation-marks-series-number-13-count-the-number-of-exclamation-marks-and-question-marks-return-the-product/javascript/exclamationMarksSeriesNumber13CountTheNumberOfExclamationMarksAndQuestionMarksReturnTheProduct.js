// 7 kyu - Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product  [ ID: 57fb142297e0860073000064  (exclamation-marks-series-number-13-count-the-number-of-exclamation-marks-and-question-marks-return-the-product) ]
// URL: https://www.codewars.com/kata/57fb142297e0860073000064
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const product = (s) => (s.match(/\?/g) || []).length * (s.match(/\!/g) || []).length
