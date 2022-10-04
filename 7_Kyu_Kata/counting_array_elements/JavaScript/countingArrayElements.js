// 7 kyu - Counting Array Elements  [ ID: 5569b10074fe4a6715000054  (counting-array-elements) ]
// URL: https://www.codewars.com/kata/5569b10074fe4a6715000054
// Category: undefined  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const count = (array) => {
    const result = {}
    for (const el of array) {
      result[el] = result[el] ? result[el] + 1 : 1
    }
    return result
  }
