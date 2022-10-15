//+ ====================================================================================================================
//+
//+ 6 kyu - Persistent Bugger.  [ ID: 55bf01e5a717a0d57e0000ec ] (persistent-bugger)
//+ URL: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function persistence(num: number, ans = 0): number {
  return num < 10 ? ans : persistence(+[...`${num}`].reduce((a, c) => `${+a * +c}`), ++ans)
}

//+ ====================================================================================================================
//+ ====================================================================================================================

function persistence2(num: number): number {
  let ans = 0
  while (num > 9) {
    num = +[...`${num}`].reduce((a, c) => `${+a * +c}`)
    ans++
  }
  return ans
}

export { persistence, persistence2 }
