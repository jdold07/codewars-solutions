// [object Object] - Word values  [ ID: 598d91785d4ce3ec4f000018  (word-values) ]
// URL: https://www.codewars.com/kata/598d91785d4ce3ec4f000018
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const wordValue = (arr) => arr.map((v, i) => [...v.replace(/\s/g, "")].reduce((a, c) => a + c.charCodeAt() - 96, 0) * ++i)
