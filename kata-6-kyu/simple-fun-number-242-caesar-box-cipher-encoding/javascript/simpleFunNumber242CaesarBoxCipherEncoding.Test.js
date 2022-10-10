//+ ====================================================================================================================
//+
//+ 6 kyu - Simple Fun #242: Caesar Box Cipher Encoding  [ ID: 590a853a093675b283000008 ] (simple-fun-number-242-caesar-box-cipher-encoding)
//+ URL: https://www.codewars.com/kata/590a853a093675b283000008
//+ Category: GAMES  |  Tags: PUZZLES
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { caesarBoxCipherEncoding } = require("./simpleFunNumber242CaesarBoxCipherEncoding")

function an(s) {
  let r = 0,
    len = s.length,
    sq = Math.floor(Math.sqrt(len))
  for (let n = 2; n <= sq; n++) if (len % n === 0 && encode(encode(s, n), n) === s) r += 2
  if (sq * sq === len) r--
  return r

  function encode(s, n) {
    let r = []
    for (let i = 0; i < n; i++) for (let j = 0; j < s.length / n; j++) r.push(s[j * n + i])
    return r.join("")
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
//   let allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   return allc[~~(allc.length * Math.random())]
// }
// function rndcn() {
//   let allc = "1234567890"
//   return allc[~~(allc.length * Math.random())]
// }
// function rndcl() {
//   let allc = "abcdefghijklmnopqrstuvwxyz"
//   return allc[~~(allc.length * Math.random())]
// }
function rndcl1() {
  let allc = "abc"
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
// function rnds(n) {
//   let len = n || rand(2, 8)
//   for (let i = 0, rs = []; i < len; i++) rs[i] = rndcl()
//   return rs.join("")
// }
function rnds1(n) {
  let len = n || rand(2, 8)
  const rs = []
  for (let i = 0; i < len; i++) {
    rs[i] = rndcl1()
  }
  return rs.join("")
}
// function rndsx(n) {
//   let len = n || rand(4, 10)
//   for (let i = 0, rs = []; i < len; i++) rs[i] = rndc()
//   return rs.join("")
// }
// function rndss(n) {
//   let len = n || rand(2, 20)
//   for (let i = 0, rs = []; i < len; i++) rs[i] = rnds()
//   return rs.join(" ")
// }
// function rndsss(n) {
//   let len = n || rand(5, 15)
//   for (let i = 0, rs = []; i < len; i++) rs[i] = rnds()
//   return rndch() + rs.join(" ")
// }

// function shuff(arr) {
//   for (let i = 0; i < 100; i++) {
//     let idx1 = rand(0, arr.length - 1),
//       idx2 = rand(0, arr.length - 1)
//     let t = arr[idx1]
//     arr[idx1] = arr[idx2]
//     arr[idx2] = t
//   }
// }
// function rnds2(n) {
//   let len = n || ~~(15 * Math.random()) + 4
//   for (let i = 0, rs = []; i < len; i++) rs[i] = rndcl()
//   return rs.join("")
// }
function rand(from, to) {
  return Math.floor((to - from + 1) * Math.random() + from)
}

let testca4 = [
  "accccccccccc",

  "ccccccccccca",

  "cbbbbbbbbbbb",

  "bbbbbbbbbbba",

  "cbabbbaaabac",

  "cbabbbaaabab",

  "bcbcccbbbcbc",

  "bcacccaaacac",

  "babaaabbbabb",

  "aacaaacccacb",

  "babaaabbbabb",

  "ccbcccbbbcbc",

  "cabaaabbbabc",

  "ccacccaaacac",

  "cbcbbbcccbca",

  "abcbbbcccbca",

  "cbabbbaaabac",

  "bccccccccccb",

  "cbabbbaaabab",

  "aabaaabbbabb",

  "bbcbbbcccbcc",

  "cbcbbbcccbcb",

  "aabaaabbbabc",

  "baaaaaaaaaab",

  "acbcccbbbcbb",

  "bcbcccbbbcbc",

  "acccccccccca",

  "ccacccaaacaa",

  "aacaaacccacb",

  "bacaaacccaca",

  "acbcccbbbcbb",

  "ccbcccbbbcbb",

  "bbbbbbbbbbba",

  "aacaaacccaca",

  "babaaabbbabc",

  "cccccccccccc",

  "cacaaacccaca",

  "acacccaaacab",

  "abbbbbbbbbba",

  "accccccccccc",

  "ccbcccbbbcba",

  "bbcbbbcccbcc",

  "abbbbbbbbbba",

  "bcbcccbbbcbc",

  "cabaaabbbabc",

  "cabaaabbbabc",

  "aabaaabbbaba",

  "bccccccccccc",

  "abcbbbcccbca",

  "aabaaabbbabb",

  "bcacccaaacab",

  "aabaaabbbaba",

  "ccbcccbbbcbc",

  "bacaaacccacb",

  "bbbbbbbbbbbc",

  "aabaaabbbabc",

  "bbbbbbbbbbba"
]

function rndtest() {
  let jl = rand(0, 3)
  if (jl == 0) return rnds1(rand(4, 25))
  if (jl == 1) return testca4[rand(0, testca4.length - 1)]
  let s = rnds1([4, 6, 8, 9, 10, 12, 15, 18, 20, 24, 25][rand(0, 10)]),
    a = an(s)
  let min = rand(1, 2)
  while (a < min) {
    s = rnds1([4, 6, 8, 9, 10, 12, 15, 18, 20, 24, 25][rand(0, 10)])
    a = an(s)
  }
  return s
}

// function rndname() {
//   let len = 3
//   for (let r = rndch(), i = 0; i < len; i++) r += rndcl()
//   return r
// }
// function rndarr() {
//   let len = rand(10, 50),
//     r1 = []
//   for (let i = 0; i < len; i++) {
//     r1[i] = rand(1, 99)
//   }
//   return r1
// }
// function rndarr2() {
//   let len = 10000,
//     len1 = len + 1,
//     add = 110000,
//     r1 = [],
//     r2 = []
//   for (let i = 0; i < len; i++) {
//     let t = rand(0, 1000) % 4 ? rand(1, len) : rand(len1, add)
//     r1[i] = t
//     r2[i] = t
//   }
//   return [r1, r2]
// }

// function showResult(s, color = "00cc00", who = "Your") {
//   console.log(
//     "<font face='sans-serif' color='#" +
//       color +
//       "' size=3><b>" +
//       who +
//       " result is:</b></font><font face='sans-serif' color='#cccc00' size=3>" +
//       "\n" +
//       s +
//       "</font>",
//     ""
//   )
// }

describe("Basic Tests", function () {
  it("It should works for basic tests.", function () {
    assert.strictEqual(caesarBoxCipherEncoding("abaaba"), 2)

    assert.strictEqual(caesarBoxCipherEncoding("a_message"), 1)

    assert.strictEqual(caesarBoxCipherEncoding("haha"), 1)

    assert.strictEqual(caesarBoxCipherEncoding("oh no"), 0)

    assert.strictEqual(caesarBoxCipherEncoding("abbdbddb"), 2)
  })
})

// let passed = 0,
// failed = 0,
// recfailed = []

describe("100 Random Tests --- Testing for correctness of solution", function () {
  it("It should works for random tests.", function () {
    for (let iii = 0; iii < 100; iii++) {
      let ddd = rndtest()
      //eee=rand(1,50)*2,
      //fff=rand(0,5),
      //ggg=rand(2,30),hhh=rand(1,50),
      // console.log(
      //   "<font face='sans-serif' color='#00cc00' size=3><b></b></font><font face='sans-serif' color='#eeee00' size=3>" +
      //     "\nmessage = " +
      //     JSON.stringify(ddd) +
      //     //+"\ne = "+JSON.stringify(eee)
      //     //+"\nstandard = "+JSON.stringify(fff)
      //     //+"\nc = "+JSON.stringify(ggg)
      //     //+",  maxW = "+JSON.stringify(hhh)
      //     "</font>",
      //   ""
      // )
      let ans = an(ddd)
      let useran = caesarBoxCipherEncoding(ddd)
      // let thisispassed = "Passed!"
      // if (JSON.stringify(useran) != JSON.stringify(ans)) {
      //   failed++
      //   thisispassed = JSON.stringify(useran)
      // } else {
      //   passed++
      // }
      //if(iii<30)
      assert.strictEqual(useran, ans)
      //else assert.strictEqual(thisispassed,"Passed!")
    }
  })
})
//console.log(recfailed)
// if (passed == 100) {
/*describe("Happy Coding ^_^", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")  
});*/
// }
