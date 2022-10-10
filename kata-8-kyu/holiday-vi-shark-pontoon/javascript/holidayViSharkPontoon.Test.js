//+ ====================================================================================================================
//+
//+ 8 kyu - Holiday VI - Shark Pontoon  [ ID: 57e921d8b36340f1fd000059 ] (holiday-vi-shark-pontoon)
//+ URL: https://www.codewars.com/kata/57e921d8b36340f1fd000059
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | MATHEMATICS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { shark } = require("./holidayViSharkPontoon")

describe("Basic tests", () => {
  assert.strictEqual(shark(12, 50, 4, 8, true), "Alive!")
  assert.strictEqual(shark(7, 55, 4, 16, true), "Alive!")
  assert.strictEqual(shark(24, 0, 4, 8, true), "Shark Bait!")
  assert.strictEqual(shark(40, 35, 3, 20, true), "Shark Bait!")
  assert.strictEqual(shark(7, 8, 3, 4, true), "Alive!")
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a

  function myshark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin == true) sharkSpeed = sharkSpeed / 2
    return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? "Alive!" : "Shark Bait!"
  }

  let hea = [true, false]
  for (let i = 0; i < 40; i++) {
    let pontoonDistance = randint(1, 50)
    let sharkDistance = randint(0, 200)
    let youSpeed = randint(0, 4)
    let sharkSpeed = randint(1, 20)
    let dolphin = hea[randint(0, hea.length - 1)]

    it(`Testing for ${pontoonDistance} and ${sharkDistance} and ${youSpeed} and ${sharkSpeed} and ${dolphin}`, () => {
      assert.strictEqual(
        shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin),
        myshark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin),
        "It should work for random inputs too"
      )
    })
  }
})
