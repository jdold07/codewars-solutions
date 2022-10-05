// 6 kyu - Sort the odd  [ ID: 578aa45ee9fd15ff4600090d  (sort-the-odd) ]
// URL: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | SORTING
// *****************************************************************************
function sortArray(array) {
      const odd = array.filter(a => a%2!==0).sort((a,b) => a-b)
      const ans = []
      array.forEach(x => x%2===0 ? ans.push(x) : ans.push(odd.shift()))
      return ans
  }
