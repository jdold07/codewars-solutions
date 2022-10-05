// 7 kyu - Square Every Digit  [ ID: 546e2562b03326a88e000020  (square-every-digit) ]
// URL: https://www.codewars.com/kata/546e2562b03326a88e000020
// Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
    function squareDigits(num){
          let str = num.toString()
          let arr = str.split("")
          let sum = ""
          for (i=0; i<arr.length; i++){
          sum += arr[i] ** 2
          }
          return parseInt(sum, 10)
      }
