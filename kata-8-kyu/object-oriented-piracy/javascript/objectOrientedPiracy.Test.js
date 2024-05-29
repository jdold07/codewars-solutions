//+ ====================================================================================================================
//+
//+ 8 kyu - Object Oriented Piracy   [ ID: 54fe05c4762e2e3047000add ] (object-oriented-piracy)
//+ URL: https://www.codewars.com/kata/54fe05c4762e2e3047000add
//+ Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { Ship } = require("./objectOrientedPiracy")

describe("Tests", () => {
  it("test", () => {
    // useless and it allows the user to cheat
    /*Ship.prototype.testing = function(){
return this.draft-(this.crew*1.5) > 20;
}*/
    console.log("Captain, we see some ships!")
    let emptyShip = new Ship(0, 0)
    assert.strictEqual(emptyShip.isWorthIt(), false)
    let aBoat = new Ship(15, 20)
    assert.strictEqual(aBoat.isWorthIt(), false)
    let biggerBoat = new Ship(35, 20)
    assert.strictEqual(biggerBoat.isWorthIt(), false)
    let aWorthyShip = new Ship(100, 20)
    assert.strictEqual(aWorthyShip.isWorthIt(), true)

    console.log("OK, how about the whole fleet of them?")
    for (let a = 0; a < 100; a++) {
      let var1 = Math.floor(Math.random() * 100 + 50)
      let var2 = Math.floor(Math.random() * 100 + 20)
      let tests = new Ship(var1, var2)
      let expected = var1 - var2 * 1.5 > 20
      assert.strictEqual(tests.isWorthIt(), expected)
    }
  })
})
