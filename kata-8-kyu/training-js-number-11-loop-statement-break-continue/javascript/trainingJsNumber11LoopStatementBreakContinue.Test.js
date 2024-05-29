//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #11: loop statement --break,continue  [ ID: 5721c189cdd71194c1000b9b ] (training-js-number-11-loop-statement-break-continue)
//+ URL: https://www.codewars.com/kata/5721c189cdd71194c1000b9b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { grabDoll } = require("./trainingJsNumber11LoopStatementBreakContinue")

function an(dolls) {
  let bag = []
  //set label is corner use of break
  bagisfull: for (let i = 0; i < dolls.length; i++) {
    //unneed to learn it.
    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue
    bag.push(dolls[i]) //break can also used with a label
    if (bag.length == 3) break bagisfull //but it's easy to mess with code
  } //so it's not a good method.
  return bag
}

function rnddolls() {
  let len = ~~(20 * Math.random()) + 3,
    rs = [],
    alldolls = [
      "Hello Kitty",
      "Hello Kitty",
      "Hello Kitty",
      "Snow white",
      "Barbie doll",
      "Barbie doll",
      "Barbie doll",
      "Tom cat",
      "Snoopy dog",
      "Mickey Mouse",
      "Donald Duck"
    ]
  for (let i = 0; i < len; i++) rs[i] = alldolls[~~(alldolls.length * Math.random())]
  return rs
}

it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  console.log("")

  //test for equations and inequalities

  assert.deepEqual(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]), ["Hello Kitty"])
  assert.deepEqual(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]), ["Hello Kitty", "Hello Kitty"])
  assert.deepEqual(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Barbie doll", "Snow white"]), [
    "Hello Kitty",
    "Hello Kitty",
    "Barbie doll"
  ])
  assert.deepEqual(grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]), [
    "Barbie doll",
    "Hello Kitty",
    "Hello Kitty"
  ])
})
it("<br><font size=4><b>---should coding with 'for','break' and 'continue'---</b></font>", () => {
  console.log("")
  let code = grabDoll + ""
  //console.log(code)
  let passswitch =
    /for *\(/.test(code) && /break/.test(code) && /continue/.test(code)
      ? "Passed"
      : 'Your solution should contains keyword "for","break" and "continue"'
  assert.deepEqual(passswitch, "Passed")
})
it("<br><font size=4><b>--------100 Random Test --------</b></font>", () => {
  console.log("")

  for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
    let dd = rnddolls(),
      answer = an(dd)
    console.log("<font color='#CD7F32'>Test for: dolls=[" + dd + "]</font>", "")
    assert.deepEqual(grabDoll(dd), answer)
  }
})
