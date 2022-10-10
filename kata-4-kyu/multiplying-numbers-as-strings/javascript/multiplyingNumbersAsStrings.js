//+ ====================================================================================================================
//+
//+ 4 kyu - Multiplying numbers as strings  [ ID: 55911ef14065454c75000062 ] (multiplying-numbers-as-strings)
//+ URL: https://www.codewars.com/kata/55911ef14065454c75000062
//+ Category: REFERENCE  |  Tags: STRINGS | BIG INTEGERS | ALGORITHMS
//+
//+ ====================================================================================================================

function multiply(a, b) {
  const fillZeros = (length) => new Array(length).fill(0)
  const last = (array) => array[array.length - 1]
  const addCarryOver = (carryOver, digits) => {
    let CarryOverValue = last(digits) + carryOver
    if (CarryOverValue >= 10) {
      digits[digits.length - 1] = 0
      digits.unshift(CarryOverValue % 10)
    } else {
      digits[digits.length - 1] = CarryOverValue
    }
  }

  const result = []
  const stepArray = []
  let carryOver = 0

  for (let aIndex = 0; aIndex < a.length; aIndex++) {
    const aDigit = a[a.length - 1 - aIndex]
    const multiplicationsArray = fillZeros(aIndex)

    for (let bIndex = 0; bIndex < b.length; bIndex++) {
      const bDigit = b[b.length - 1 - bIndex]
      const multiplication = aDigit * bDigit + carryOver
      multiplicationsArray.unshift(multiplication % 10)
      carryOver = Math.floor(multiplication / 10)
    }

    if (carryOver !== 0) {
      multiplicationsArray.unshift(carryOver)
      carryOver = 0
    }
    stepArray.push(multiplicationsArray)
  }

  addCarryOver(carryOver, last(stepArray))
  const maxLength = stepArray.map((step) => step.length).reduce((max, elLength) => Math.max(max, elLength))
  stepArray.forEach((step) => step.reverse())

  carryOver = 0
  for (let i = 0; i < maxLength + 1; i++) {
    const sum = stepArray.map((step) => step[i] || 0).reduce((sum, el) => sum + el, carryOver)
    result.unshift(sum % 10)
    carryOver = Math.floor(sum / 10)
  }
  addCarryOver(carryOver, result)
  let finalAnswer = result.join("")
  while (finalAnswer.charAt(0) === "0" && finalAnswer.length > 1) {
    finalAnswer = finalAnswer.substring(1)
  }
  //   process.stdout.write(`${(BigInt(a) * BigInt(b)).toString()}, ${(BigInt(a) * BigInt(b)).toString() === finalAnswer}, `)
  return finalAnswer
}

module.exports = { multiply }
