// 6 kyu - Find the missing letter  [ ID: 5839edaa6754d6fec10000a2  (find-the-missing-letter) ]
// URL: https://www.codewars.com/kata/5839edaa6754d6fec10000a2
// Category: undefined  |  Tags: MATHEMATICS | ALGORITHMS
// *****************************************************************************
function findMissingLetter(array) {
      let start = array.join("").charCodeAt(0)
      for (i=0; i<array.length; i++)
          if (array.join("").charCodeAt(i) == start) start++
      return String.fromCharCode(start)
  }
