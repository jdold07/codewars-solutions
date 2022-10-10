//+ ====================================================================================================================
//+
//+ 6 kyu - FizzBuzz++  [ ID: 596925532f709fccf3000077 ] (fizzbuzz-plus-plus)
//+ URL: https://www.codewars.com/kata/596925532f709fccf3000077
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

function fizzbuzzPlusPlus(numbers, words) {
  const resultLength = numbers.reduce((acc, curr) => acc * curr)
  let result = Array.from({ length: resultLength }, (_, i) => i + 1)

  for (let i = 0; i < result.length; i++) {
    let codeWord = ""
    for (let j = 0; j < numbers.length; j++) {
      if (result[i] % numbers[j] === 0) {
        codeWord += words[j]
      }
    }
    if (codeWord !== "") {
      result[i] = codeWord
    }
  }
  return result
}

module.exports = { fizzbuzzPlusPlus }
