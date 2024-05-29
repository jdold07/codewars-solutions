//+ ====================================================================================================================
//+
//+ 6 kyu - Encryption and decryption--Matrix pair  [ ID: 5827ba50c983ca5d8b000a0d ] (encryption-and-decryption-matrix-pair)
//+ URL: https://www.codewars.com/kata/5827ba50c983ca5d8b000a0d
//+ Category: ALGORITHMS  |  Tags: PUZZLES | ALGORITHMS | MATRIX | CIPHERS | CRYPTOGRAPHY
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { encryption } = require("./encryptionAndDecryptionMatrixPair")

function an(key, str) {
  let mat = key.split("\n").map((x) => x.split(" "))
  return str.replace(/../g, (x) => enc(x[0], x[1]))

  function enc(a, b) {
    let idx1 = key.indexOf(a),
      idx2 = key.indexOf(b),
      i1 = ~~(idx1 / 10),
      j1 = (idx1 % 10) / 2,
      i2 = ~~(idx2 / 10),
      j2 = (idx2 % 10) / 2
    return idx1 == idx2 || idx1 < 0 || idx2 < 0 ? a + b : i1 == i2 || j1 == j2 ? b + a : mat[i1][j2] + mat[i2][j1]
  }
}

// function rndc() {
//   let allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   return allc[~~(allc.length * Math.random())]
// }
// function rndc1() {
//   let allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+\\/"
//   return allc[~~(allc.length * Math.random())]
// }
// function rndclo() {
//   let allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+"
//   return allc[~~(allc.length * Math.random())]
// }
// function rndcn() {
//   let allc = "1234567890"
//   return allc[~~(allc.length * Math.random())]
// }
function rndcl() {
  let allc = "abcdefghijklmnopqrstuvwxyz"
  return allc[~~(allc.length * Math.random())]
}
// function rndcno() {
//   let allc = "1234567890_ !@#$%^&*_(),.?|{}[]-=+"
//   return allc[~~(allc.length * Math.random())]
// }
// function rndch() {
//   let allc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   return allc[~~(allc.length * Math.random())]
// }
// function rnd9() {
//   let allc = "123456789"
//   return allc[~~(allc.length * Math.random())]
// }
// function rnd10() {
//   let allc = "0123456789"
//   return allc[~~(allc.length * Math.random())]
// }
function rnds(n) {
  let len = n || rand(5, 60)
  const rs = []
  for (let i = 0; i < len; i++) {
    rs[i] = rndcl()
  }
  return rs.join("")
}
// function rndss(n) {
//   let len = n || rand(3, 7)
//   for (let i = 0, rs = []; i < len; i++) rs[i] = rand(0, 1000) % 2 ? rndcl() : rndch()
//   return rs.join("")
// }
// function rndsss(n) {
//   let len = n || rand(5, 15)
//   for (let i = 0, rs = []; i < len; i++) rs[i] = rnds()
//   return rndch() + rs.join(" ")
// }
// function rndname() {
//   return rndch() + rnds()
// }
function shuff(arr) {
  for (let i = 0; i < 20; i++) {
    let idx1 = rand(0, arr.length - 1),
      idx2 = rand(0, arr.length - 1)
    let t = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = t
  }
}
// function rnds2(n) {
//   let len = n || ~~(15 * Math.random()) + 4
//   for (let i = 0, rs = []; i < len; i++) rs[i] = rndcl()
//   return rs.join("")
// }
function rand(from, to) {
  return Math.floor((to - from + 1) * Math.random() + from)
}
function rndtest() {
  let all = "abcdefghijklmnopqrstuvwxyz"
    .replace(rndcl(), "")
    .match(/.{5}/g)
    .map((x) => x.split(""))
  shuff(all)
  return all.map((x) => x.join(" ")).join("\n")
}

// function rndarr() {
//   let len = rand(3, 20),
//     r = []
//   for (let i = 0; i < len; i++) r[i] = rand(0, 20)
//   return r
// }

describe("Basic Tests", function () {
  it("It should works for basic tests", function () {
    let key = `a b c d e
f g h i j
k l m n o
p q r s t
u v w x y`

    assert.strictEqual(encryption(key, "example"), "dyckqke")
    assert.strictEqual(encryption(key, "dyckqke"), "example")

    assert.strictEqual(encryption(key, "codewars"), "emeducsr")
    assert.strictEqual(encryption(key, "emeducsr"), "codewars")

    assert.strictEqual(encryption(key, "zyx"), "zyx")
  })
})
let failed = 0

describe("100 Random Tests", function () {
  it("It should works for random tests too.", function () {
    for (let iii = 0; iii < 100; iii++) {
      let eee = rndtest(),
        fff = rnds(),
        ans = an(eee, fff)
      console.log(
        "<font face='sans-serif' color='#00cc00' size=3><b>Testing for:</b></font><font face='sans-serif' color='#cccc00' size=3>" +
          "\nkey = \n" +
          eee +
          "\nstr = " +
          JSON.stringify(fff) +
          "</font>",
        ""
      )
      let useran = encryption(eee, fff)
      if (ans != useran) failed++
      assert.strictEqual(useran, ans)
    }
  })
})

if (!failed) {
  /*describe("Congratulations! You have passed all the tests!", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")  
});*/
}
