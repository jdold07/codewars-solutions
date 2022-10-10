//+ ====================================================================================================================
//+
//+ 6 kyu - Consonant value  [ ID: 59c633e7dcc4053512000073 ] (consonant-value)
//+ URL: https://www.codewars.com/kata/59c633e7dcc4053512000073
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function solve(s) {
  const arr = s.split(/[aeiou]/)
  let sumArr = []
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i].split("")
    let sum = 0
    for (let j = 0; j < str.length; j++) {
      sum += parseInt(str[j], 36) - 9
    }
    sumArr.push(sum)
  }
  return sumArr.sort((a, b) => a - b).pop()
}

module.exports = { solve }
