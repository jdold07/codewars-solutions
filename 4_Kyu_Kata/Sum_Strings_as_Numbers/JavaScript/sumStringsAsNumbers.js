// 4 kyu - Sum Strings as Numbers  [ ID: 5324945e2ece5e1f32000370  (sum-strings-as-numbers) ]
// URL: https://www.codewars.com/kata/5324945e2ece5e1f32000370
// Category: undefined  |  Tags: STRINGS | BIG INTEGERS | ALGORITHMS
// *****************************************************************************
const divMod = (int) => [Math.floor(int / 10), int % 10]

  function sumStrings(a, b) {
    let x = [...a].reverse()
    let y = [...b].reverse()
    let carry = 0,
      res = []
  
    if (x.length < y.length) [x, y] = [y, x]
  
    for (let i = 0; i < x.length; i++) {
      let [tens, ones] = divMod(+x[i] + (+y[i] || 0) + carry)
      carry = tens
      res.push(ones)
      if (i === x.length - 1 && tens > 0) {
        x.push("0")
        y.push("0")
      }
    }
    if (carry) x.push(carry)
  
    return res.reverse().join("").replace(/^0*(?!$)/, "")
  }
