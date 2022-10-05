// 7 kyu - SantaClausable Interface  [ ID: 52b50a20fa0e77b304000103  (santaclausable-interface) ]
// URL: https://www.codewars.com/kata/52b50a20fa0e77b304000103
// Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING
// *****************************************************************************
describe("SantaClausable Interface", function () {
  var SantaClaus = (function () {
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

  var DummySantaClaus = (function () {
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

  var anotherSanta = {
    sayHoHoHo: function () {},
    distributeGifts: function () {},
    goDownTheChimney: function () {},
    justAnotherMethod: function () {}
  }

  var NotSantaClaus = (function () {
    function NotSantaClaus(name) {
      this.name = name
    }
    NotSantaClaus.prototype.sayHoHoHo = true
    NotSantaClaus.prototype.distributeGifts = true
    NotSantaClaus.prototype.goDownTheChimney = true
    return NotSantaClaus
  })()

  var anotherNotSanta = {
    sayhohoho: function () {},
    distributegifts: function () {},
    godownthechimney: function () {}
  }

  it("should implement the SantaClausable interface", function () {
    var santa = new SantaClaus("Santa")
    Test.assertEquals(isSantaClausable(santa), true, "Instance of SantaClaus")
    Test.assertEquals(isSantaClausable(new DummySantaClaus()), true, "Instance of DummySantaClaus")
    Test.assertEquals(isSantaClausable(anotherSanta), true, "Object like in the description")

    santa.sayHoHoHo()
    santa.goDownTheChimney()
    santa.sayHoHoHo()
    santa.distributeGifts()
    santa.sayHoHoHo()
  })

  it("should not implement the SantaClausable interface", function () {
    Test.assertEquals(isSantaClausable(new NotSantaClaus()), false, "Boolean properties instead of functions")
    Test.assertEquals(isSantaClausable("just a string"), false, "A string does not implement the SantaClausable interface")
    Test.assertEquals(isSantaClausable({}), false, "An empty object does not implement the SantaClausable interface")

    var santa = new SantaClaus("Santa")
    delete SantaClaus.prototype.sayHoHoHo
    Test.assertEquals(isSantaClausable(santa), false, 'The "sayHoHoHo" method was deleted')
    Test.assertEquals(isSantaClausable(anotherNotSanta), false, "Lowercase method names")
  })

  console.log("<h2>Merry X-Mas and a Happy New Year!</h2>")
})
