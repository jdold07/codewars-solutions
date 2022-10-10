//+ ====================================================================================================================
//+
//+ 7 kyu - Holiday III - Fire on the boat  [ ID: 57e8fba2f11c647abc000944 ] (holiday-iii-fire-on-the-boat)
//+ URL: https://www.codewars.com/kata/57e8fba2f11c647abc000944
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | STRINGS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { fireFight } = require("./holidayIiiFireOnTheBoat")

describe("Holiday III - Fire on the boat", () => {
  it("Fixed tests", () => {
    assert.strictEqual(
      fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"),
      "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast"
    )
    assert.strictEqual(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~")
    assert.strictEqual(
      fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"),
      "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain"
    )
    assert.strictEqual(fireFight("Boat Deck Boat"), "Boat Deck Boat")
    assert.strictEqual(fireFight("Fire Boat Captain"), "~~ Boat Captain")
  })

  it("Random tests", () => {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a

    function myfireFight(s) {
      s = s.split(" ")
      for (let i = 0; i < s.length; i++) {
        if (s[i] == "Fire") s.splice(i, 1, "~~")
      }
      console.log(s.join(" "))
      return s.join(" ")
    }

    let names = [
      "Fire",
      "Boat",
      "Hull",
      "Propeller",
      "Engine",
      "Sail",
      "Deck",
      "Fire",
      "Fire",
      "Mast",
      "Captain",
      "Rudder",
      "Fire",
      "Water"
    ]

    for (let i = 0; i < 40; i++) {
      let s = [],
        len = randint(1, 20)
      for (let k = 0; k < len; k++) s.push(names[randint(0, names.length - 1)])
      s = s.join(" ")
      assert.strictEqual(fireFight(s), myfireFight(s), `Testing for ${JSON.stringify(s)}`)
    }
  })
})
