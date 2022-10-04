// 7 kyu - Sum of the first nth term of Series  [ ID: 555eded1ad94b00403000071  (sum-of-the-first-nth-term-of-series) ]
// URL: https://www.codewars.com/kata/555eded1ad94b00403000071
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
function SeriesSum(n){
    if (n < 1) return "0.00"
    let arr = Array(n-1).fill(4)
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i-1] + 3
    }
    return (arr.reduce((a,b) => a + (1 / b), 0) + 1).toFixed(2)
  }
