// 8 kyu - Logical calculator  [ ID: 57096af70dad013aa200007b  (logical-calculator) ]
// URL: https://www.codewars.com/kata/57096af70dad013aa200007b
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const logicalCalc = (arr, op) => {
  const sym = { AND: "&&", OR: "||", XOR: "^" }[op]
  return !!arr.reduce((a, c) => eval(a + sym + c))
}
// *****************************************************************************
// *****************************************************************************
const logicalCalc = (array, op) => {
  const arr = [...array]
  const sym = { AND: "&&", OR: "||", XOR: "^" }[op]
  const res = []
  while (arr.length > 0) {
    res.push(`(${arr.splice(0, 2).join(` ${sym} `)})`)
  }
  return eval(res.join(` ${sym} `)) == true || false
}
