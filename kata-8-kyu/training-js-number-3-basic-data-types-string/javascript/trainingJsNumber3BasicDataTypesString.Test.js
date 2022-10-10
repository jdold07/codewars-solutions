//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #3:  Basic data types--String  [ ID: 571edea4b625edcb51000d8e ] (training-js-number-3-basic-data-types-string)
//+ URL: https://www.codewars.com/kata/571edea4b625edcb51000d8e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { Dad, Bee, banana, answer1, answer2, answer3 } = require("./trainingJsNumber3BasicDataTypesString")

it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  assert.equal(Dad(), "Dad")
  assert.equal(Bee(), "Bee")
  assert.equal(banana(), "banana")
  let text1 =
    "John's iron axe fell into the river. He cried sadly by the river.\n" +
    "Then a monster came out of the water, with a golden axe in his hand.\n" +
    "He asked John: is this golden axe yours?"
  console.log(text1)
  if (answer1() != "no" && answer1() != "") {
    let fail = 'The monster frowned and said to John: "This is not your axe,\n' + 'you are not an honest boy!!!"'
    console.log(fail)
  }
  assert.equal(answer1(), "no")
  let text2 =
    "John replied that it was not his axe. The monster took out a silver axe.\n" + "He asked John: is this silver axe yours?"
  console.log(text2)
  if (answer2() != "no" && answer2() != "") {
    let fail = 'The monster frowned and said to John: "This is not your axe,\n' + 'you are not an honest boy!!!"'
    console.log(fail)
  }
  assert.equal(answer2(), "no")
  let text3 =
    "John replied that it was not his axe. The monster took out a iron axe.\n" + "He asked John: is this iron axe yours?"
  console.log(text3)
  if (answer3() != "yes" && answer3() != "") {
    let fail = 'The monster frowned and said to John: "This is your axe,\n' + 'are you a foolish boy???"'
    console.log(fail)
  }
  assert.equal(answer3(), "yes")
  let text4 = "John said happily: This is my iron axe!!!\n"
  console.log(text4)
  // a2 = "x"
  // e2 = "x"
  // if (Dad() == "Dad" || Bee() == "Bee" || banana() == "banana") {
  //   let text5 =
  //     'The monster frowned and said to John: "Yes, this is your iron axe,\n' +
  //     'but you write code that always cheat me, you are not an honest boy!!!"'
  //   console.log(text5)
  //   assert.notEqual(Dad(), "Dad")
  //   assert.notEqual(Bee(), "Bee")
  //   assert.notEqual(banana(), "banana")
  // }
  let text6 = 'The monster smiled and said to John, "you are an honest boy!"'
  console.log(text6)
})
