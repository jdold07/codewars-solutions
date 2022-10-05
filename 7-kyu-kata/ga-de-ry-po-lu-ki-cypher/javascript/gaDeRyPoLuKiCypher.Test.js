// 7 kyu - GA-DE-RY-PO-LU-KI cypher  [ ID: 592a6ad46d6c5a62b600003f  (ga-de-ry-po-lu-ki-cypher) ]
// URL: https://www.codewars.com/kata/592a6ad46d6c5a62b600003f
// Category: REFERENCE  |  Tags: FUNDAMENTALS | CIPHERS | CRYPTOGRAPHY
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert

describe("Scouts are waiting!", function () {
  it("Basic Tests", function () {
    assert.strictEqual(encode("Ala has a cat"), "Gug hgs g cgt")
    assert.strictEqual(decode("Gug hgs g cgt"), "Ala has a cat")
    assert.strictEqual(encode("ABCD"), "GBCE")
    assert.strictEqual(encode("gaderypoluki"), "agedyropulik")
    assert.strictEqual(decode("agedyropulik"), "gaderypoluki")
    assert.strictEqual(decode("GBCE"), "ABCD")
  })

  it("Random Tests", function () {
    let loop = 0
    while (loop++ < 1000) {
      let str = makeStr()
      assert.strictEqual(encode(str), e(str))
    }
  })
})

function makeStr() {
  let text = ""
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz0123456789"

  for (let i = 0; i < Math.round(Math.random() * 100) + 1; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}

function e(str) {
  let cypher = "gaderypolukiGADERYPOLUKI"
  return str
    .split("")
    .map((x) =>
      cypher.indexOf(x) == -1
        ? x
        : cypher.indexOf(x) % 2 == 1
        ? cypher[cypher.indexOf(x) - 1]
        : cypher[cypher.indexOf(x) + 1]
    )
    .join("")
}
