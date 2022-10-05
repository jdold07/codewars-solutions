// 6 kyu - Unary function chainer  [ ID: 54ca3e777120b56cb6000710  (unary-function-chainer) ]
// URL: https://www.codewars.com/kata/54ca3e777120b56cb6000710
// Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING | FUNDAMENTALS
// *****************************************************************************
const chained = (functions) => (input) => functions.reduce((res, func) => func(res), input)
  
// *****************************************************************************
// *****************************************************************************
const chained = (functions) => {
    function fnFinally(props) {
      res = props
      for (func of functions) {
        res = func(res)
      }
      return res
    }
    return fnFinally
  }

