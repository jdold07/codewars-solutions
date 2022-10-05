// 8 kyu - validate code with simple regex  [ ID: 56a25ba95df27b7743000016  (validate-code-with-simple-regex) ]
// URL: https://www.codewars.com/kata/56a25ba95df27b7743000016
// Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(validateCode(123), true)
    assert.strictEqual(validateCode(248), true)
    assert.strictEqual(validateCode(8), false)
    assert.strictEqual(validateCode(321), true)
    assert.strictEqual(validateCode(9453), false)
  })

  it("Random tests", () => {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)

    const validate_sol = (code) => /^[1-3]/.test("" + code)

    for (let i = 0; i < 40; i++) {
      let code = +("" + randint(1, 6) + randint(1, Math.pow(10, randint(1, 9))))
      assert.strictEqual(validateCode(code), validate_sol(code), `Testing for ${code}`)
    }
  })
})
