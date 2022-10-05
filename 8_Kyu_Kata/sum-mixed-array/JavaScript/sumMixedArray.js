// [object Object] - Sum Mixed Array  [ ID: 57eaeb9578748ff92a000009  (sum-mixed-array) ]
// URL: https://www.codewars.com/kata/57eaeb9578748ff92a000009
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
// *****************************************************************************
function sumMix(x){
      let y = []
      for (let i = 0; i < x.length; i++){
          if (Number.isInteger(x[i])) {
              y.push(x[i])
          }else {
              y.push(Number.parseInt(x[i]))
          }
      }
      return y.reduce((a, b) => a + b, 0)
  }
