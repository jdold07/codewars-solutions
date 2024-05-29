//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #5:  Basic data types--Object  [ ID: 571f1eb77e8954a812000837 ] (training-js-number-5-basic-data-types-object)
//+ URL: https://www.codewars.com/kata/571f1eb77e8954a812000837
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { animal } = require("./trainingJsNumber5BasicDataTypesObject")

function an(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}
function rndani() {
  let name = ["dog", "cat", "pig", "rabbit", "wolf", "horse", "mouse", "monkey", "cock", "duck", "bird"],
    color = ["red", "black", "white", "blue", "yellow", "gray", "green"],
    legs = [2, 4]
  let nn = name[~~(name.length * Math.random())],
    cc = color[~~(color.length * Math.random())],
    ll = legs[~~(legs.length * Math.random())]
  return { name: nn, legs: ll, color: cc }
}

it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  assert.deepEqual(animal({ name: "dog", legs: 4, color: "white" }), "This white dog has 4 legs.")
  assert.deepEqual(animal({ name: "cock", legs: 2, color: "red" }), "This red cock has 2 legs.")
  assert.deepEqual(animal({ name: "rabbit", legs: 4, color: "gray" }), "This gray rabbit has 4 legs.")
})

it("<br><font size=4><b>--------100 Random Test --------</b></font>", () => {
  for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
    let oo = rndani(),
      answer = an(oo)
    console.log("<font color='#CD7F32'>Test for: obj=</font>", oo)
    assert.deepEqual(animal(oo), answer)
  }
})
