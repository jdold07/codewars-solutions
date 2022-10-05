// 6 kyu - Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?  [ ID: 57fb44a12b53146fe1000136  (exclamation-marks-series-number-17-put-the-exclamation-marks-and-question-marks-on-the-balance-are-they-balanced) ]
// URL: https://www.codewars.com/kata/57fb44a12b53146fe1000136
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************

function an(left, right) {
  let x = [...left].reduce((a, b) => a + (b == "!" ? 2 : 3), 0),
    y = [...right].reduce((a, b) => a + (b == "!" ? 2 : 3), 0)
  return x > y ? "Left" : x < y ? "Right" : "Balance"
}

function rndc() {
  let allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length * Math.random())]
}
function rndc1() {
  let allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+\\/"
  return allc[~~(allc.length * Math.random())]
}
function rndclo() {
  let allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+"
  return allc[~~(allc.length * Math.random())]
}
function rndcn() {
  let allc = "1234567890"
  return allc[~~(allc.length * Math.random())]
}
function rndcl() {
  let allc = "abcdefghijklmnopqrstuvwxyz"
  return allc[~~(allc.length * Math.random())]
}
function rndcno() {
  let allc = "1234567890_ !@#$%^&*_(),.?|{}[]-=+"
  return allc[~~(allc.length * Math.random())]
}
function rndch() {
  let allc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length * Math.random())]
}
function rnd9() {
  let allc = "123456789"
  return allc[~~(allc.length * Math.random())]
}
function rnd10() {
  let allc = "0123456789"
  return allc[~~(allc.length * Math.random())]
}
function rnds(n) {
  let len = n || rand(3, 7)
  for (let i = 0, rs = []; i < len; i++) rs[i] = rndcl()
  return rs.join("")
}
function rndss(n) {
  let len = n || rand(3, 7)
  for (let i = 0, rs = []; i < len; i++) rs[i] = rand(0, 1000) % 2 ? rndcl() : rndch()
  return rs.join("")
}
function rndsss(n) {
  let len = n || rand(5, 15)
  for (let i = 0, rs = []; i < len; i++) rs[i] = rnds()
  return rndch() + rs.join(" ")
}
function rndname() {
  return rndch() + rnds()
}
function shuff(arr) {
  for (let i = 0; i < 20; i++) {
    let idx1 = rand(0, arr.length - 1),
      idx2 = rand(0, arr.length - 1)
    let t = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = t
  }
}
function rnds2(n) {
  let len = n || ~~(15 * Math.random()) + 4
  for (let i = 0, rs = []; i < len; i++) rs[i] = rndcl()
  return rs.join("")
}
function rand(from, to) {
  return Math.floor((to - from + 1) * Math.random() + from)
}
function rndmark() {
  let len1,
    len2,
    r1 = [],
    r2 = [],
    jl = rand(0, 1000) % 4
  if (jl == 0) (len1 = rand(10, 20)), (len2 = rand(10, 20))
  else (len1 = rand(5, 40)), (len2 = len1)
  for (let i = 0; i < len1; i++) r1[i] = ["!", "?"][rand(0, 1)]
  for (let i = 0; i < len2; i++) r2[i] = ["!", "?"][rand(0, 1)]
  return [r1.join(""), r2.join("")]
}

describe("Basic Tests", function () {
  it("It should works for basic tests", function () {
    Test.assertSimilar(balance("!!", "??"), "Right")
    Test.assertSimilar(balance("!??", "?!!"), "Left")
    Test.assertSimilar(balance("!?!!", "?!?"), "Left")
    Test.assertSimilar(balance("!!???!????", "??!!?!!!!!!!"), "Balance")
  })
})
describe("100 Random Tests", function () {
  it("It should works for random tests too", function () {
    for (let iii = 0; iii < 100; iii++) {
      let lll = rndmark(),
        ans = an(...lll)
      console.log(
        "<font face='sans-serif' color='#00cc00'><b>Testing for:</b></font><font face='sans-serif' color='#cccc00'>" +
          '\nleft = "' +
          lll[0] +
          '"\nright="' +
          lll[1] +
          '"</font>',
        ""
      )
      let useran = balance(...lll)
      Test.assertSimilar(useran, ans)
    }
  })
})

/*describe("Happy Coding ^_^", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")  
});*/
