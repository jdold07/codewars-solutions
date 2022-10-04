// 6 kyu - Two Sum  [ ID: 52c31f8e6605bcc646000082  (two-sum) ]
// URL: https://www.codewars.com/kata/52c31f8e6605bcc646000082
// Category: undefined  |  Tags: ARRAYS | FUNDAMENTALS | ALGORITHMS
// *****************************************************************************
function twoSum(numbers, target) {
      for (let i=0; i < numbers.length; i++){
          for (let j=1; j < numbers.length; j++){
              if (numbers[i] + numbers[j] === target) return [i, j]
          }
      }
  }
