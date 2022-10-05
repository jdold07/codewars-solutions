// [object Object] - Beginner Series #3 Sum of Numbers  [ ID: 55f2b110f61eb01779000053  (beginner-series-number-3-sum-of-numbers) ]
// URL: https://www.codewars.com/kata/55f2b110f61eb01779000053
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS
// *****************************************************************************
getSum = (a,b) => {
      let sum = 0
      if (a===b) return a
      if (a<b) {
          while (a<=b){
              sum += a
              a++
          }
      } else {
          while (b<=a){
              sum += b
              b++
          }
      }
      return sum
  }
