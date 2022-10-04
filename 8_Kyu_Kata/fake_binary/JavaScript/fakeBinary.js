// 8 kyu - Fake Binary  [ ID: 57eae65a4321032ce000002d  (fake-binary) ]
// URL: https://www.codewars.com/kata/57eae65a4321032ce000002d
// Category: undefined  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
// *****************************************************************************
function fakeBin(x){
    x = x.replace(/[1-4]/g, "0")
    x = x.replace(/[5-9]/g, "1")
    return x
  
  }
