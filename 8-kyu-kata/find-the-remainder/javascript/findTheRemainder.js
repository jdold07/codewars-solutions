// 8 kyu - Find the Remainder  [ ID: 524f5125ad9c12894e00003f  (find-the-remainder) ]
// URL: https://www.codewars.com/kata/524f5125ad9c12894e00003f
// Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
function remainder(n, m){
      if (Math.min(n, m) === 0) {
          return NaN
      } else if (n > m) {
          return (n % m)
      } else {
          return (m % n)
      }
  }
