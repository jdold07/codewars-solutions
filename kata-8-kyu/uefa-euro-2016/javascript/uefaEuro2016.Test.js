//+ ====================================================================================================================
//+
//+ 8 kyu - UEFA EURO 2016  [ ID: 57613fb1033d766171000d60 ] (uefa-euro-2016)
//+ URL: https://www.codewars.com/kata/57613fb1033d766171000d60
//+ Category: REFERENCE  |  Tags: STRINGS | ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================


const { assert } = require("chai")
const { uefaEuro2016 } = require("./uefaEuro2016")





describe("UEFA EURO 2016", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(uefaEuro2016(["Germany", "Ukraine"], [2, 0]), "At match Germany - Ukraine, Germany won!")
    assert.strictEqual(uefaEuro2016(["Belgium", "Italy"], [0, 2]), "At match Belgium - Italy, Italy won!")
    assert.strictEqual(uefaEuro2016(["Portugal", "Iceland"], [1, 1]), "At match Portugal - Iceland, teams played draw.")
    assert.strictEqual(uefaEuro2016(["France", "Romania"], [2, 0]), "At match France - Romania, France won!")
    assert.strictEqual(uefaEuro2016(["Albania", "Switzerland"], [0, 2]), "At match Albania - Switzerland, Switzerland won!")
    assert.strictEqual(
      uefaEuro2016(["Republic of Ireland", "Sweden"], [1, 1]),
      "At match Republic of Ireland - Sweden, teams played draw."
    )
  })

  it("Random Tests:", () => {
    let listOfQualifiedTeams = [
      "Albania",
      "Austria",
      "Belgium",
      "Croatia",
      "Czech Republic",
      "England",
      "France",
      "Germany",
      "Hungary",
      "Iceland",
      "Italy",
      "Northern Ireland",
      "Poland",
      "Portugal",
      "Republic of Ireland",
      "Romania",
      "Russia",
      "Slovakia",
      "Spain",
      "Sweden",
      "Switzerland",
      "Turkey",
      "Ukraine",
      "Wales"
    ]

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    }

    let getRandomScore = getRandomInt

    function getRandomTeam(list) {
      return list[getRandomInt(0, list.length)]
    }

    for (let iteration = 0; iteration <= 50; iteration += 1) {
      let teamA = getRandomTeam(listOfQualifiedTeams),
        teamB = getRandomTeam(listOfQualifiedTeams),
        scoreA = getRandomScore(0, 10),
        scoreB = getRandomScore(0, 10)

      if (teamA === teamB) {
        continue
      }

      if (scoreA > scoreB) {
        assert.strictEqual(
          uefaEuro2016([teamA, teamB], [scoreA, scoreB]),
          "At match " + teamA + " - " + teamB + ", " + teamA + " won!"
        )
      }

      if (scoreA < scoreB) {
        assert.strictEqual(
          uefaEuro2016([teamA, teamB], [scoreA, scoreB]),
          "At match " + teamA + " - " + teamB + ", " + teamB + " won!"
        )
      }

      if (scoreA === scoreB) {
        assert.strictEqual(
          uefaEuro2016([teamA, teamB], [scoreA, scoreB]),
          "At match " + teamA + " - " + teamB + ", teams played draw."
        )
      }
    }
  })
})


