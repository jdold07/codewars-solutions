//+ ====================================================================================================================
//+
//+ 7 kyu - SantaClausable Interface  [ ID: 52b50a20fa0e77b304000103 ] (santaclausable-interface)
//+ URL: https://www.codewars.com/kata/52b50a20fa0e77b304000103
//+ Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { isSantaClausable } = require("./santaclausableInterface")

describe("SantaClausable Interface", function () {
  let SantaClaus = (function () {
    function SantaClaus(name) {
      this.name = name
    }
    SantaClaus.prototype.sayHoHoHo = function () {
      console.log(this.name + ' says: "Ho Ho Ho!"')
    }
    SantaClaus.prototype.distributeGifts = function () {
      console.log(this.name + " hands out gifts to all the children")
    }
    SantaClaus.prototype.goDownTheChimney = function () {
      console.log("*Whoosh* " + this.name + " goes down the chimney.")
    }
    return SantaClaus
  })()

  let DummySantaClaus = (function () {
    function DummySantaClaus() {}
    DummySantaClaus.prototype.sayHoHoHo = function () {
      throw "Ho Ho Ho!"
    }
    DummySantaClaus.prototype.distributeGifts = function () {
      throw "Gifts for all!"
    }
    DummySantaClaus.prototype.goDownTheChimney = function () {
      throw "Whooosh!"
    }
    DummySantaClaus.prototype.harnessReindeers = function () {}
    return DummySantaClaus
  })()

  let anotherSanta = {
    sayHoHoHo: function () {},
    distributeGifts: function () {},
    goDownTheChimney: function () {},
    justAnotherMethod: function () {}
  }

  let NotSantaClaus = (function () {
    function NotSantaClaus(name) {
      this.name = name
    }
    NotSantaClaus.prototype.sayHoHoHo = true
    NotSantaClaus.prototype.distributeGifts = true
    NotSantaClaus.prototype.goDownTheChimney = true
    return NotSantaClaus
  })()

  let anotherNotSanta = {
    sayhohoho: function () {},
    distributegifts: function () {},
    godownthechimney: function () {}
  }

  it("should implement the SantaClausable interface", function () {
    let santa = new SantaClaus("Santa")
    assert.strictEqual(isSantaClausable(santa), true, "Instance of SantaClaus")
    assert.strictEqual(isSantaClausable(new DummySantaClaus()), true, "Instance of DummySantaClaus")
    assert.strictEqual(isSantaClausable(anotherSanta), true, "Object like in the description")

    santa.sayHoHoHo()
    santa.goDownTheChimney()
    santa.sayHoHoHo()
    santa.distributeGifts()
    santa.sayHoHoHo()
  })

  it("should not implement the SantaClausable interface", function () {
    assert.strictEqual(isSantaClausable(new NotSantaClaus()), false, "Boolean properties instead of functions")
    assert.strictEqual(isSantaClausable("just a string"), false, "A string does not implement the SantaClausable interface")
    assert.strictEqual(isSantaClausable({}), false, "An empty object does not implement the SantaClausable interface")

    let santa = new SantaClaus("Santa")
    delete SantaClaus.prototype.sayHoHoHo
    assert.strictEqual(isSantaClausable(santa), false, 'The "sayHoHoHo" method was deleted')
    assert.strictEqual(isSantaClausable(anotherNotSanta), false, "Lowercase method names")
  })

  console.log("<h2>Merry X-Mas and a Happy New Year!</h2>")
})
