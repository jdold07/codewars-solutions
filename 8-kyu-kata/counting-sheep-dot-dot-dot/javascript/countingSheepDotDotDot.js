// 8 kyu - Counting sheep...  [ ID: 54edbc7200b811e956000556  (counting-sheep-dot-dot-dot) ]
// URL: https://www.codewars.com/kata/54edbc7200b811e956000556
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((a,b) => b ? a + 1 : a, 0)
  }
