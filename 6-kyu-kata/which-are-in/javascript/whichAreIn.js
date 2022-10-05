// 6 kyu - Which are  in?  [ ID: 550554fd08b86f84fe000a58  (which-are-in) ]
// URL: https://www.codewars.com/kata/550554fd08b86f84fe000a58
// Category: REFACTORING  |  Tags: ARRAYS | LISTS | STRINGS | REFACTORING
// *****************************************************************************
function inArray(array1, array2) {
  const r = []
  for (v of array1) {
    if (array2.toString().includes(v)) r.push(v)
  }
  return [...new Set(r)].sort()
}
