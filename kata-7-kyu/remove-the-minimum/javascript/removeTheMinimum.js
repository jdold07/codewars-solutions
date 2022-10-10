//+ ====================================================================================================================
//+
//+ 7 kyu - Remove the minimum  [ ID: 563cf89eb4747c5fb100001b ] (remove-the-minimum)
//+ URL: https://www.codewars.com/kata/563cf89eb4747c5fb100001b
//+ Category: REFERENCE  |  Tags: LISTS | ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function removeSmallest(numbers) {
  let numbers2 = [...numbers]
  numbers2.splice(numbers.indexOf(Math.min(...numbers)), 1)
  return numbers2 || []
}

module.exports = { removeSmallest }
