// 5 kyu - Where my anagrams at?  [ ID: 523a86aa4230ebb5420001e1  (where-my-anagrams-at) ]
// URL: https://www.codewars.com/kata/523a86aa4230ebb5420001e1
// Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
// *****************************************************************************
function anagrams(word, words) {
  let wordSorted = word.split("").sort().join("")
  return words.filter((value) => value.split("").sort().join("") === wordSorted)
}
// *****************************************************************************
// *****************************************************************************
function anagrams(word, words) {
  let wordSorted = word.split("").sort().join("")
  let wordsSorted = [...words].map((value) => value.split("").sort().join(""))
  let result = []
  for (let i = 0; i < wordsSorted.length; i++) {
    if (wordsSorted[i] === wordSorted) result.push(words[i])
  }
  return result
}
