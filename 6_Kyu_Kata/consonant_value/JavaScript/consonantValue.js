// 6 kyu - Consonant value  [ ID: 59c633e7dcc4053512000073  (consonant-value) ]
// URL: https://www.codewars.com/kata/59c633e7dcc4053512000073
// Category: undefined  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
function solve(s) {
      const arr = s.split(/a|e|i|o|u/)
      let sumArr = []
      for (let i = 0; i < arr.length; i++) {
          str = arr[i].split("")
          sum = 0
          for (let j = 0; j < str.length; j++) {
              sum += parseInt(str[j], 36) - 9
          }
          sumArr.push(sum)
      }
      return sumArr.sort((a, b) => a - b).pop()
    }
