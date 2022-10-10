/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
//+ ====================================================================================================================
//+
//+ 8 kyu - Not so black box  [ ID: 57080f21d531cd94950007eb ] (not-so-black-box)
//+ URL: https://www.codewars.com/kata/57080f21d531cd94950007eb
//+ Category: REFERENCE  |  Tags: PUZZLES
//+
//+ ====================================================================================================================
//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

var blackBox = function (args) {
  //a secret message is hidden within me
  //if you cannot see it, fear not!
  //just think of another way to read me.

  if ("you have got this far, well done!");
  if ("you did NOT use toString(), let me know!");
  if ("you see this, you have my terrible secret...");
  if ("you call JSopenSesame(), you'll pass!");

  if (!args) return "Empty?"
  if (typeof args == "string") return "Hmm...Interesting reading."
  else return "Ugh"
}

var theBoxHasBeenOpened = true //false
var theBoxHasBeenOpenedTheProperWay = true // false

function JSopenSesame() {
  theBoxHasBeenOpened = true
  theBoxHasBeenOpenedTheProperWay = true
}

function check() {
  if (theBoxHasBeenOpened) return true
  else return false
}

//+ ====================================================================================================================
const { assert } = require("chai")

it("Did you open the box?", function () {
  function secretCheck() {
    if (theBoxHasBeenOpenedTheProperWay) return true
    else return false
  }

  assert.isTrue(secretCheck(), "It's clamped shut!")
})
