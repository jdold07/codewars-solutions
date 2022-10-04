// 6 kyu - Delete occurrences of an element if it occurs more than n times  [ ID: 554ca54ffa7d91b236000023  (delete-occurrences-of-an-element-if-it-occurs-more-than-n-times) ]
// URL: https://www.codewars.com/kata/554ca54ffa7d91b236000023
// Category: undefined  |  Tags: LISTS | FUNDAMENTALS
// *****************************************************************************
function deleteNth(arr, n) {
  let result = []
  let photoCount = {}
  arr.forEach((element) => {
    photoCount[element] = (photoCount[element] || 0) + 1
    if (photoCount[element] <= n) result.push(element)
  })
  return result
}
