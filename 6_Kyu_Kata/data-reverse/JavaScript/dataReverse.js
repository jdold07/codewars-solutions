// [object Object] - Data Reverse  [ ID: 569d488d61b812a0f7000015  (data-reverse) ]
// URL: https://www.codewars.com/kata/569d488d61b812a0f7000015
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
function dataReverse(data) {
      let bytes = []
      while (data.length > 0) {
          str = ""
          for (let i = 0; i < 8; i++) {
              str += data.shift()
          }
          bytes.push(str)
      }
      return bytes.reverse().join("").split("").map(Number)
  }
