// 5 kyu - Calculating with Functions  [ ID: 525f3eda17c7cd9f9e000b39  (calculating-with-functions) ]
// URL: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
// Category: undefined  |  Tags: FUNCTIONAL PROGRAMMING
// *****************************************************************************
function zero   (operator)  {return operator ? operator(0) : 0}
  function one    (operator)  {return operator ? operator(1) : 1}
  function two    (operator)  {return operator ? operator(2) : 2}
  function three  (operator)  {return operator ? operator(3) : 3}
  function four   (operator)  {return operator ? operator(4) : 4}
  function five   (operator)  {return operator ? operator(5) : 5}
  function six    (operator)  {return operator ? operator(6) : 6}
  function seven  (operator)  {return operator ? operator(7) : 7}
  function eight  (operator)  {return operator ? operator(8) : 8}
  function nine   (operator)  {return operator ? operator(9) : 9}
  
  function plus(y) {
      return function(x) {
          return x + y
      }
  }
  function minus(y) {
      return function(x) {
          return x - y
      }
  }
  function times(y) {
      return function(x) {
          return x * y
      }
  }
  function dividedBy(y) {
      return function(x) {
          return Math.floor(x/y)
      }
  }
