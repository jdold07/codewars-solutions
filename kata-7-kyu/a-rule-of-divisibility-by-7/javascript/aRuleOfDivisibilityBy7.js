//+ ====================================================================================================================
//+
//+ 7 kyu - A Rule of Divisibility by 7  [ ID: 55e6f5e58f7817808e00002e ] (a-rule-of-divisibility-by-7)
//+ URL: https://www.codewars.com/kata/55e6f5e58f7817808e00002e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function seven(m) {
  const stack = []
  while (m.toString().length > 2) {
    stack.push((m = m.toString().slice(0, -1) - m.toString().slice(-1) * 2))
  }
  return [stack[stack.length - 1] || m, stack.length]
}

module.exports = { seven }
