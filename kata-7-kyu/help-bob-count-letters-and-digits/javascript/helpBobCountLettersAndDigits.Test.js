//+ ====================================================================================================================
//+
//+ 7 kyu - Help Bob count letters and digits.  [ ID: 5738f5ea9545204cec000155 ] (help-bob-count-letters-and-digits)
//+ URL: https://www.codewars.com/kata/5738f5ea9545204cec000155
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { countLettersAndDigits } = require("./helpBobCountLettersAndDigits")

describe("Fixed tests", function () {
  it("Should count correctly", function () {
    assert.equal(countLettersAndDigits("hel2!lo"), 6)
    assert.equal(countLettersAndDigits("n!!_ice!!123"), 7)
    assert.equal(countLettersAndDigits("1"), 1)
    assert.equal(countLettersAndDigits("?"), 0)
    assert.equal(countLettersAndDigits("12345f%%%t5t&/6"), 10)
    assert.equal(countLettersAndDigits("aBcDeFg090"), 10)
    assert.equal(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10)
  })
})

describe("Random tests", () => {
  const randInt = (a, b) => (Math.random() * (b - a + 1) + a) | 0

  const randomStringGenerator = () => {
    let str = ""
    let strlen = randInt(1, 50)
    for (let i = 0; i < strlen; i++) {
      str += String.fromCharCode(randInt(32, 126))
    }
    return str
  }

  const refSolCt = (input) => --input.split(/[a-z\d]/i).length

  for (let i = 1; i <= 100; i++) {
    it(`Random test #${i}`, () => {
      const randStr = randomStringGenerator()
      const expected = refSolCt(randStr)
      console.log(`Testing for input = ${randStr}`)
      assert.equal(countLettersAndDigits(randStr), expected)
    })
  }
})
