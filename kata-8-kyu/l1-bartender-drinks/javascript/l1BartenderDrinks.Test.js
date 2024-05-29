//+ ====================================================================================================================
//+
//+ 8 kyu - L1: Bartender, drinks!  [ ID: 568dc014440f03b13900001d ] (l1-bartender-drinks)
//+ URL: https://www.codewars.com/kata/568dc014440f03b13900001d
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomToken } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { getDrinkByProfession } = require("./l1BartenderDrinks")

it("Tests", () => {
  assert.strictEqual(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'")
  assert.strictEqual(
    getDrinkByProfession("scHOOl counselor"),
    "Anything with Alcohol",
    "'School Counselor' should map to 'Anything with alcohol'"
  )
  assert.strictEqual(
    getDrinkByProfession("prOgramMer"),
    "Hipster Craft Beer",
    "'Programmer' should map to 'Hipster Craft Beer'"
  )
  assert.strictEqual(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'")
  assert.strictEqual(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'")
  assert.strictEqual(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'")
  assert.strictEqual(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'")
  assert.strictEqual(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'")

  assert.strictEqual(getDrinkByProfession("jabrOnI"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'")
  assert.strictEqual(
    getDrinkByProfession("scHOOl COUnselor"),
    "Anything with Alcohol",
    "'School Counselor' should map to 'Anything with alcohol'"
  )
  assert.strictEqual(
    getDrinkByProfession("prOgramMeR"),
    "Hipster Craft Beer",
    "'Programmer' should map to 'Hipster Craft Beer'"
  )
  assert.strictEqual(getDrinkByProfession("bike GanG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'")
  assert.strictEqual(getDrinkByProfession("poLiTiCiAN"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'")
  assert.strictEqual(getDrinkByProfession("RAPPer"), "Cristal", "'Rapper' should map to 'Cristal'")
  assert.strictEqual(getDrinkByProfession("punDIT"), "Beer", "'Pundit' should map to 'Beer'")
  assert.strictEqual(getDrinkByProfession("pUg"), "Beer", "'Pug' should map to 'Beer'")
})

describe("Random tests", function () {
  let _, professions, referenceSol
  _ = require("lodash")
  professions = ["jabroni", "school counselor", "programmer", "bike gang member", "politician", "rapper"]
  referenceSol = function (profession) {
    switch (profession.toLowerCase()) {
      case "jabroni":
        return "Patron Tequila"
      case "school counselor":
        return "Anything with Alcohol"
      case "programmer":
        return "Hipster Craft Beer"
      case "bike gang member":
        return "Moonshine"
      case "politician":
        return "Your tax dollars"
      case "rapper":
        return "Cristal"
      default:
        return "Beer"
    }
  }
  _.times(40, function () {
    let prof
    prof = _.random(1) === 0 ? _.sample(professions) : randomToken()
    if (_.random(1) === 0) {
      prof = prof.toUpperCase()
    }
    it(prof, function () {
      assert.deepEqual(getDrinkByProfession(prof), referenceSol(prof))
    })
  })
})
