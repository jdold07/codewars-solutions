// 7 kyu - Digital cypher vol 2  [ ID: 592edfda5be407b9640000b2  (digital-cypher-vol-2) ]
// URL: https://www.codewars.com/kata/592edfda5be407b9640000b2
// Category: REFERENCE  |  Tags: FUNDAMENTALS | CIPHERS | CRYPTOGRAPHY
// *****************************************************************************
describe("Decoding..", function () {
  it("Basic Tests", function () {
    Test.assertEquals(decode([20, 12, 18, 30, 21], 1939), "scout")
    Test.assertEquals(decode([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939), "masterpiece")
  })

  it("Random Tests", function () {
    let loop = 0
    while (loop < 50000) {
      let str = makeStr()
      let cd = e(str, loop + 2)
      Test.assertEquals(decode(cd, loop + 2), str)
      loop += 123
    }
  })
})

function makeStr() {
  let text = ""
  let possible = "abcdefghijklmnopqrstuvwxyz"

  for (let i = 0; i < Math.round(Math.random() * 100) + 1; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}

function e(s, n) {
  return s.split("").map((e, i) => e.charCodeAt(0) - "a".charCodeAt(0) + 1 + parseInt(n.toString()[i % n.toString().length]))
}
