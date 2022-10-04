// 8 kyu - Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right  [ ID: 57faf7275c991027af000679  (exclamation-marks-series-number-6-remove-n-exclamation-marks-in-the-sentence-from-left-to-right) ]
// URL: https://www.codewars.com/kata/57faf7275c991027af000679
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const remove = (s,n) => s.replace(/!/g, (char) => n-- > 0 ? "" : char)
// *****************************************************************************
// *****************************************************************************
function remove(s,n){
    while (n > 0 && s.includes("!")) {
      s = s.replace(/!/, "")
      n--
    }
    return s
  }

