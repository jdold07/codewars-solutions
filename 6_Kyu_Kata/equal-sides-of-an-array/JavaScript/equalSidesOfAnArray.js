// [object Object] - Equal Sides Of An Array  [ ID: 5679aa472b8f57fb8c000047  (equal-sides-of-an-array) ]
// URL: https://www.codewars.com/kata/5679aa472b8f57fb8c000047
// Category: REFERENCE  |  Tags: ALGORITHMS | ARRAYS | FUNDAMENTALS
// *****************************************************************************
function findEvenIndex(arr) {
      let left = 0
      let right = arr.reduce((a,b) => a+b,0)
      for (i = 0; i < arr.length; i++) {
          right -= arr[i]
          if (right === left) return i
          left += arr[i]
      }
      return -1
  }
// *****************************************************************************
// *****************************************************************************
function findEvenIndex(arr) {
      let leftSum = 0
      let tempSum = 0
      let index = 0
      while (arr.length > 0) {
          tempSum += arr.shift()
          if (arr.reduce((a,b) => a+b,0) === leftSum) return index
          index++
          leftSum = tempSum
      }
      return -1
  }

