//+ ====================================================================================================================
//+
//+ 7 kyu - Cipher  [ ID: 5a19701d80171fd71d000029 ] (cipher)
//+ URL: https://www.codewars.com/kata/5a19701d80171fd71d000029
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS | CIPHERS | CRYPTOGRAPHY | STRINGS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { decode, encode } = require("./cipher")

describe("Tests", () => {
  it("test", () => {
    let words = [
      "alpha",
      "beta",
      "gamma",
      "delta",
      "epsilon",
      "zeta",
      "eta",
      "theta",
      "iota",
      "kappa",
      "lambda",
      "omicron",
      "sigma",
      "upsilon",
      "omega",
      "terra",
      "ignis",
      "aqua",
      "spiritus",
      "clementia",
      "amor"
    ]

    function genSentence() {
      words = words.sort(() => Math.random() * 100 > Math.random() * 100)

      let w = []
      for (let i = 0; i < Math.floor(Math.random() * 5) + 5; i++) w.push(words[Math.floor(Math.random() * words.length)])
      return w.join(" ")
    }

    // Encode //

    function rEncode(str) {
      let s = ""
      for (const i of Object.keys(str)) s += String.fromCharCode(str.charCodeAt(i) * 6)
      return s
    }

    console.log("Encoding")

    for (let i = 0; i < 20; i++) {
      let w = genSentence()

      let ce = rEncode(w)
      let ue = encode(w)

      assert.strictEqual(ue, ce)
    }

    // Decode //

    function rDecode(str) {
      let s = ""
      for (const i of Object.keys(str)) s += String.fromCharCode(str.charCodeAt(i) / 6)
      return s
    }

    console.log("Decoding")

    for (let i = 0; i < 20; i++) {
      let w = rEncode(genSentence())

      let cd = rDecode(w)
      let ud = decode(w)

      assert.strictEqual(ud, cd)
    }
  })
})
