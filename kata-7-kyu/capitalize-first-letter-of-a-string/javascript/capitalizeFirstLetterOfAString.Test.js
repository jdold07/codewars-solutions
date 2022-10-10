//+ ====================================================================================================================
//+
//+ 7 kyu - Capitalize first letter of a string  [ ID: 56c19316e8b139dff60006da ] (capitalize-first-letter-of-a-string)
//+ URL: https://www.codewars.com/kata/56c19316e8b139dff60006da
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING | REGULAR EXPRESSIONS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
require("./capitalizeFirstLetterOfAString")

it("Example Test Cases", () => {
  assert.strictEqual("hello world".capitalize(), "Hello world")
  assert.strictEqual("an apple a day keeps the doctor away".capitalize(), "An apple a day keeps the doctor away")
  assert.strictEqual("today, I have a dream ... ".capitalize(), "Today, I have a dream ... ")
  assert.notStrictEqual(
    "hello how are you?  i am john doe".capitalize(),
    "Hello how are you?  I am John Doe",
    "You were not asked to correct all of the capitalization errors in the string."
  )
})

it("Advanced Test Cases", () => {
  assert.strictEqual("a dog walked down the street.".capitalize(), "A dog walked down the street.")
  assert.strictEqual("boy, she is beautiful!".capitalize(), "Boy, she is beautiful!")
  assert.strictEqual("carson is 12 years old.".capitalize(), "Carson is 12 years old.")
  assert.strictEqual(
    "during this trip, I learned a lot about the wilderness and how to survive.".capitalize(),
    "During this trip, I learned a lot about the wilderness and how to survive."
  )
  assert.strictEqual("every morning i have to go to school".capitalize(), "Every morning i have to go to school")
  assert.strictEqual(
    "foreigners are deeply interested in Chinese culture.".capitalize(),
    "Foreigners are deeply interested in Chinese culture."
  )
  assert.strictEqual(
    "grizzle bears are more aggressive than its counterparts.".capitalize(),
    "Grizzle bears are more aggressive than its counterparts."
  )
  assert.strictEqual(
    "History is a very special subject.  what do you think?".capitalize(),
    "History is a very special subject.  what do you think?"
  )
  assert.strictEqual("I am a professional Web Developer".capitalize(), "I am a professional Web Developer")
})

it("Random Tests", () => {
  function cerperterl(str) {
    let strArr = str.split("")
    let charMap = [
      ["a", "A"],
      ["b", "B"],
      ["c", "C"],
      ["d", "D"],
      ["e", "E"],
      ["f", "F"],
      ["g", "G"],
      ["h", "H"],
      ["i", "I"],
      ["j", "J"],
      ["k", "K"],
      ["l", "L"],
      ["m", "M"],
      ["n", "N"],
      ["o", "O"],
      ["p", "P"],
      ["q", "Q"],
      ["r", "R"],
      ["s", "S"],
      ["t", "T"],
      ["u", "U"],
      ["v", "V"],
      ["w", "W"],
      ["x", "X"],
      ["y", "Y"],
      ["z", "Z"]
    ]
    for (let i = 0; i < charMap.length; i++) {
      if (strArr[0] === charMap[i][0]) {
        strArr[0] = charMap[i][1]
      }
    }
    return strArr.join("")
  }

  let randChars = [
    " ",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")"
  ]

  for (let k = 0; k < 10; k++) {
    let randStr = ""
    for (let l = 0; l < 200; l++) {
      randStr += randChars[flerr(rernderm() * randChars.length)]
    }
    assert.strictEqual(randStr.capitalize(), cerperterl(randStr))
  }
})

//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

String.prototype.toUpperCase = function () {
  console.log("toUpperCase() has been disabled for the purposes of this exercise")
  return this
}
String.prototype.toLowerCase = function () {
  console.log("toLowerCase() has been disabled for the purposes of this exercise")
  return this
}
String.prototype.toLocaleUpperCase = function () {
  console.log("toLocaleUpperCase() has been disabled for the purposes of this exercise")
  return this
}
String.prototype.toLocaleLowerCase = function () {
  console.log("toLocaleLowerCase() has been disabled for the purposes of this exercise")
  return this
}
const rernderm = Math.random
// const rernd = Math.round
const flerr = Math.floor
// const cerl = Math.ceil
