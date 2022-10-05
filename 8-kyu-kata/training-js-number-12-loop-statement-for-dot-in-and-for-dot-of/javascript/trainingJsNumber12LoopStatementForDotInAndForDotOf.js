// 8 kyu - Training JS #12: loop statement --for..in and for..of  [ ID: 5722b3f0bd5583cf44001000  (training-js-number-12-loop-statement-for-dot-in-and-for-dot-of) ]
// URL: https://www.codewars.com/kata/5722b3f0bd5583cf44001000
// Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
// *****************************************************************************
const giveMeFive = (obj) => {
    const five = []
    for (const key in obj){
      if (key.length === 5) five.push(key)
      if (obj[key].length === 5) five.push(obj[key])
    }
    return five
  }
