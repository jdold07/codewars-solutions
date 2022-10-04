// 6 kyu - Encryption and decryption--Matrix pair  [ ID: 5827ba50c983ca5d8b000a0d  (encryption-and-decryption-matrix-pair) ]
// URL: https://www.codewars.com/kata/5827ba50c983ca5d8b000a0d
// Category: undefined  |  Tags: PUZZLES | ALGORITHMS | MATRIX | CIPHERS | CRYPTOGRAPHY
// *****************************************************************************
const encryption = (key, str) => {
  //** Create both keys by continuing chain with flat() if not using an ancient Node version! **//
  const flatKey = [].concat(...key.split("\n").map((v) => v.split(" ")))
  const keyMap = []
    .concat(...key.split("\n").map((v, i) => v.split(" ").map((_, i2) => [i, i2])))
    .reduce((a, c, i3) => ({ ...a, [c]: flatKey[i3], [flatKey[i3]]: c }), {})

  const cipher = (v) => {
    const [r1, c1] = keyMap[v[0]],
      [r2, c2] = keyMap[v[1]]
    if (r1 === r2 || c1 === c2) return v.split("").reverse().join("")
    return v.replace(v, () => keyMap[`${r1},${c2}`] + keyMap[`${r2},${c1}`])
  }

  return str.match(/.{1,2}/g).reduce((a, c) => a + (c.length < 2 ? c : !keyMap[c[0]] || !keyMap[c[1]] ? c : cipher(c)), "")
}
