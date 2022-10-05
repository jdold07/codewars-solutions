// 8 kyu - Enumerable Magic #1 - True for All?  [ ID: 54598d1fcbae2ae05200112c  (enumerable-magic-number-1-true-for-all) ]
// URL: https://www.codewars.com/kata/54598d1fcbae2ae05200112c
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
function all( arr, fun ){
    if (fun()) return fun()
    while (arr.length){
      if (!fun(arr.pop())) return false
    }
    return true
  }
