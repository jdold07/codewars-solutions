//+ ====================================================================================================================
//+
//+ 6 kyu - Coding 3min : Waiting for a Bus  [ ID: 57070eff924f343280000015 ] (coding-3min-waiting-for-a-bus)
//+ URL: https://www.codewars.com/kata/57070eff924f343280000015
//+ Category: GAMES  |  Tags: PUZZLES | GAMES
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { sc } = require("./coding3minWaitingForABus")

const fcode = function (str) {
  const isChar = function (a) {
    if (a) {
      let code = a.toLowerCase().charCodeAt(0)
      return code >= 97 && code <= 122
    }
    return false
  }
  return str
    .replace(/\r?\n|\r/g, "")
    .split("")
    .filter((a, i, x) => {
      return a === " " ? (isChar(x[i - 1]) && isChar(x[i + 1]) ? true : false) : true
    })
    .join("")
}

function an(time, km) {
  let start = 360 + km * 2,
    end = 1200 + km * 2,
    [hh, mm] = time.split(":").map((x) => +x),
    wait = hh * 60 + mm
  if (end < wait) wait = start
  while (start < wait) start += 15
  start %= 1440
  return ("0" + ~~(start / 60)).slice(-2) + ":" + ("0" + (start % 60)).slice(-2)
}
// function sc2(time, km) {
//   let [hh, mm] = time.split(":").map((x) => +x),
//     travel = km * 2,
//     total
//   if (hh < 6) (hh = 6), (mm = 0)
//   let wait = hh * 60 + mm
//   if (wait <= 360 + travel || wait > 1200 + travel) total = 360 + travel
//   else total = wait - (wait % 15) + (travel % 15)
//   if (total < wait && wait <= 1200 + travel) total += 15
//   total %= 1440
//   return ("0" + ~~(total / 60)).substr(-2) + ":" + ("0" + (total % 60)).substr(-2)
// }

// function rndc() {
//   return String.fromCharCode(~~(26 * Math.random()) + 97)
// }
// function rnds() {
//   let len = ~~(8 * Math.random()) + 1
//   for (let i = 0, rs = []; i < len; i++) rs[i] = rndword()
//   return rs.join(" ")
// }
function rndtime() {
  let hour = ~~(24 * Math.random())
  let min = ~~(60 * Math.random())
  return ("0" + hour).slice(-2) + ":" + ("0" + min).slice(-2)
}
function rndkm() {
  return ~~(500 * Math.random())
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")

it("Fixed Tests", () => {
  assert.deepEqual(sc("06:00", 1), "06:02", "good luck!")
  assert.deepEqual(sc("06:00", 10), "06:20", "good luck!")
  assert.deepEqual(sc("07:00", 10), "07:05", "good luck!")
  assert.deepEqual(sc("10:00", 100), "10:05", "good luck!")
  assert.deepEqual(sc("09:00", 100), "09:20", "good luck!")
  assert.deepEqual(sc("05:00", 1), "06:02", "good luck!")
  assert.deepEqual(sc("20:00", 1), "20:02", "good luck!")
  assert.deepEqual(sc("20:03", 1), "06:02", "good luck!")
  assert.deepEqual(sc("23:58", 420), "00:00", "good luck!")
  assert.deepEqual(sc("10:54", 72), "10:54", "good luck!")
  assert.deepEqual(sc("22:23", 244), "22:23", "good luck!")
})

describe("Anti-Cheating and Calc the Code Length Tests", () => {
  it("No Cheating!", () => {
    //anti-cheat and calc the code length
    console.log("<br><font size=4><b>--------Code length check --------</b></font>")
    let limit = 160
    const fs = require("fs")
    const allcode = fs.readFileSync(
      "kata-6-kyu/coding-3min-waiting-for-a-bus/javascript/coding3minWaitingForABus.js",
      "utf8"
    )
    let code = fcode(allcode.replace(/\/\/.*\n/g, ""))
    let codelen = code.length
    if (codelen <= limit)
      assert.deepEqual(
        "code length<=" + limit,
        "code length>" + limit,
        "your code length = " +
          codelen +
          ", please try this code in challenge version.\n the simple version only accept the solution which length>" +
          limit
      )
    else assert.deepEqual("PASS", "PASS", ";-)")
    //end of anti-cheat
  })
})

it("Should work for random tests too!", () => {
  console.log("<br><font size=4><b>--------100 Random Test --------</b></font>")
  console.log("")
  for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
    let tt = rndtime(),
      kk = rndkm(),
      answer = an(tt, kk)
    console.log("<font color='#CD7F32'>Test: time='" + tt + "'  km=" + kk + "</font>", "")
    assert.deepEqual(sc(tt, kk), answer, "good luck!")
  }
  console.log("<br><font size=4><b>Congratulations, You pass the test!</b></font>", "")
  console.log(
    "<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>",
    ""
  )
})

//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

// Object.defineProperty(Function.prototype, "toString", { writable: false })
// Object.defineProperty(Function.prototype, "toString", { configurable: false })
//myjinxin code
