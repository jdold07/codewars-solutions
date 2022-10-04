// 8 kyu - CSV representation of array  [ ID: 5a34af40e1ce0eb1f5000036  (csv-representation-of-array) ]
// URL: https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
// Category: undefined  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
function toCsvText(array) {
    let result = ""
    for (let row of array) {
      result += (row.join(",") + "\n")
    }
    return result.trim()
  }
