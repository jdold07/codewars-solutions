// 6 kyu - Simple Fun #242: Caesar Box Cipher Encoding  [ ID: 590a853a093675b283000008  (simple-fun-number-242-caesar-box-cipher-encoding) ]
// URL: https://www.codewars.com/kata/590a853a093675b283000008
// Category: GAMES  |  Tags: PUZZLES
// *****************************************************************************
function an(s) {
  var r = 0,
    len = s.length,
    sq = Math.floor(Math.sqrt(len))
  for (var n = 2; n <= sq; n++) if (len % n === 0 && encode(encode(s, n), n) === s) r += 2
  if (sq * sq === len) r--
  return r

  function encode(s, n) {
    var r = []
    for (var i = 0; i < n; i++) for (var j = 0; j < s.length / n; j++) r.push(s[j * n + i])
    return r.join("")
  }
}

function rndc() {
  var allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length * Math.random())]
}
function rndc1() {
  var allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+\\/"
  return allc[~~(allc.length * Math.random())]
}
function rndclo() {
  var allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length * Math.random())]
}
function rndcn() {
  var allc = "1234567890"
  return allc[~~(allc.length * Math.random())]
}
function rndcl() {
  var allc = "abcdefghijklmnopqrstuvwxyz"
  return allc[~~(allc.length * Math.random())]
}
function rndcl1() {
  var allc = "abc"
  return allc[~~(allc.length * Math.random())]
}
function rndcno() {
  var allc = "1234567890_ !@#$%^&*_(),.?|{}[]-=+"
  return allc[~~(allc.length * Math.random())]
}
function rndch() {
  var allc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length * Math.random())]
}
function rnd9() {
  var allc = "123456789"
  return allc[~~(allc.length * Math.random())]
}
function rnd10() {
  var allc = "0123456789"
  return allc[~~(allc.length * Math.random())]
}
function rnds(n) {
  var len = n || rand(2, 8)
  for (var i = 0, rs = []; i < len; i++) rs[i] = rndcl()
  return rs.join("")
}
function rnds1(n) {
  var len = n || rand(2, 8)
  for (var i = 0, rs = []; i < len; i++) rs[i] = rndcl1()
  return rs.join("")
}
function rndsx(n) {
  var len = n || rand(4, 10)
  for (var i = 0, rs = []; i < len; i++) rs[i] = rndc()
  return rs.join("")
}
function rndss(n) {
  var len = n || rand(2, 20)
  for (var i = 0, rs = []; i < len; i++) rs[i] = rnds()
  return rs.join(" ")
}
function rndsss(n) {
  var len = n || rand(5, 15)
  for (var i = 0, rs = []; i < len; i++) rs[i] = rnds()
  return rndch() + rs.join(" ")
}

function shuff(arr) {
  for (var i = 0; i < 100; i++) {
    var idx1 = rand(0, arr.length - 1),
      idx2 = rand(0, arr.length - 1)
    var t = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = t
  }
}
function rnds2(n) {
  var len = n || ~~(15 * Math.random()) + 4
  for (var i = 0, rs = []; i < len; i++) rs[i] = rndcl()
  return rs.join("")
}
function rand(from, to) {
  return Math.floor((to - from + 1) * Math.random() + from)
}

var testca4 = [
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

function rndtest(big) {
  var jl = rand(0, 3)
  if (jl == 0) return rnds1(rand(4, 25))
  if (jl == 1) return testca4[rand(0, testca4.length - 1)]
  var s = rnds1([4, 6, 8, 9, 10, 12, 15, 18, 20, 24, 25][rand(0, 10)]),
    a = an(s)
  var min = rand(1, 2)
  while (a < min) {
    s = rnds1([4, 6, 8, 9, 10, 12, 15, 18, 20, 24, 25][rand(0, 10)])
    a = an(s)
  }
  return s
}

function rndname() {
  var len = 3
  for (var r = rndch(), i = 0; i < len; i++) r += rndcl()
  return r
}
function rndarr() {
  var len = rand(10, 50),
    r1 = []
  for (var i = 0; i < len; i++) {
    r1[i] = rand(1, 99)
  }
  return r1
}
function rndarr2() {
  var len = 10000,
    len1 = len + 1,
    add = 110000,
    r1 = [],
    r2 = []
  for (var i = 0; i < len; i++) {
    var t = rand(0, 1000) % 4 ? rand(1, len) : rand(len1, add)
    r1[i] = t
    r2[i] = t
  }
  return [r1, r2]
}

function showResult(s, color = "00cc00", who = "Your") {
  console.log(
    "<font face='sans-serif' color='#" +
      color +
      "' size=3><b>" +
      who +
      " result is:</b></font><font face='sans-serif' color='#cccc00' size=3>" +
      "\n" +
      s +
      "</font>",
    ""
  )
}

describe("Basic Tests", function () {
  it("It should works for basic tests.", function () {
    Test.assertEquals(caesarBoxCipherEncoding("abaaba"), 2)

    Test.assertEquals(caesarBoxCipherEncoding("a_message"), 1)

    Test.assertEquals(caesarBoxCipherEncoding("haha"), 1)

    Test.assertEquals(caesarBoxCipherEncoding("oh no"), 0)

    Test.assertEquals(caesarBoxCipherEncoding("abbdbddb"), 2)
  })
})

var passed = 0,
  failed = 0,
  recfailed = []

describe("100 Random Tests --- Testing for correctness of solution", function () {
  it("It should works for random tests.", function () {
    for (var iii = 0; iii < 100; iii++) {
      var ddd = rndtest()
      //eee=rand(1,50)*2,
      //fff=rand(0,5),
      //ggg=rand(2,30),hhh=rand(1,50),
      console.log(
        "<font face='sans-serif' color='#00cc00' size=3><b></b></font><font face='sans-serif' color='#eeee00' size=3>" +
          "\nmessage = " +
          JSON.stringify(ddd) +
          //+"\ne = "+JSON.stringify(eee)
          //+"\nstandard = "+JSON.stringify(fff)
          //+"\nc = "+JSON.stringify(ggg)
          //+",  maxW = "+JSON.stringify(hhh)
          "</font>",
        ""
      )
      var ans = an(ddd)
      var useran = caesarBoxCipherEncoding(ddd)
      var thisispassed = "Passed!"
      if (JSON.stringify(useran) != JSON.stringify(ans)) {
        failed++
        thisispassed = JSON.stringify(useran)
      } else {
        passed++
      }
      //if(iii<30)
      Test.assertEquals(useran, ans)
      //else Test.assertEquals(thisispassed,"Passed!")
    }
  })
})
//console.log(recfailed)
if (passed == 100) {
  /*describe("Happy Coding ^_^", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")  
});*/
}
