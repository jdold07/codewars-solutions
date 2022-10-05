// [object Object] - Playing with digits  [ ID: 5552101f47fc5178b1000050  (playing-with-digits) ]
// URL: https://www.codewars.com/kata/5552101f47fc5178b1000050
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
function digPow(n, p){
      let x = n
          .toString()
          .split("")
          .reduce((a,b,c) => a + (b ** (c+p)),0)
      if (x%n===0) return x/n
      return -1
  }
