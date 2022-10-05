// 7 kyu - Don't give me five!  [ ID: 5813d19765d81c592200001a  (dont-give-me-five) ]
// URL: https://www.codewars.com/kata/5813d19765d81c592200001a
// Category: ALGORITHMS  |  Tags: MATHEMATICS | ARRAYS | ALGORITHMS
// *****************************************************************************
function dontGiveMeFive(start, end) {
      const arr = Array(end - start + 1)
          .fill()
          .map((_,index) => start + index)
          .filter((value) => /^((?!5).)*$/g.test(value))
      return arr.length
  }
