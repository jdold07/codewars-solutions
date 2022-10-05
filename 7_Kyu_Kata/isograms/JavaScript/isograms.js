// [object Object] - Isograms  [ ID: 54ba84be607a92aa900000f1  (isograms) ]
// URL: https://www.codewars.com/kata/54ba84be607a92aa900000f1
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const isIsogram = str => str.search(/(.)(?=.*\1)/gi) === -1
      ? true
      : false
