// 6 kyu - Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?  [ ID: 57fb44a12b53146fe1000136  (exclamation-marks-series-number-17-put-the-exclamation-marks-and-question-marks-on-the-balance-are-they-balanced) ]
// URL: https://www.codewars.com/kata/57fb44a12b53146fe1000136
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const balance = (left, right) => {
    const eMark = (s) => (s.match(/\!/g) || []).length * 2
    const qMark = (s) => (s.match(/\?/g) || []).length * 3
    const l = eMark(left) + qMark(left)
    const r = eMark(right) + qMark(right)
    return r > l ? "Right" : l > r ? "Left" : "Balance"
  }
