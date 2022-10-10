//+ ====================================================================================================================
//+
//+ 7 kyu - Numbers to Letters  [ ID: 57ebaa8f7b45ef590c00000c ] (numbers-to-letters)
//+ URL: https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { switcher } = require("./numbersToLetters")

describe("Numbers to Letters", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(switcher(["24", "12", "23", "22", "4", "26", "9", "8"]), "codewars")
    assert.strictEqual(switcher(["25", "7", "8", "4", "14", "23", "8", "25", "23", "29", "16", "16", "4"]), "btswmdsbd kkw")
    assert.strictEqual(switcher(["4", "24"]), "wc")
    assert.strictEqual(switcher(["12"]), "o")
    assert.strictEqual(switcher(["12", "28", "25", "21", "25", "7", "11", "22", "15"]), "o?bfbtpel")
  })

  it("Random tests", () => {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
    function myswitcher(x) {
      let letter = {
        26: "a",
        25: "b",
        24: "c",
        23: "d",
        22: "e",
        21: "f",
        20: "g",
        19: "h",
        18: "i",
        17: "j",
        16: "k",
        15: "l",
        14: "m",
        13: "n",
        12: "o",
        11: "p",
        10: "q",
        9: "r",
        8: "s",
        7: "t",
        6: "u",
        5: "v",
        4: "w",
        3: "x",
        2: "y",
        1: "z",
        27: "!",
        28: "?",
        29: " "
      }
      return x.map((x) => (x = letter[x])).join("")
    }
    let names = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29"
    ]

    for (let i = 0; i < 100; i++) {
      let x = [],
        len = randint(1, 30)
      for (let k = 0; k < len; k++) x.push(names[randint(0, names.length - 1)])
      assert.strictEqual(switcher(x.slice()), myswitcher(x), `Testing for x = ${JSON.stringify(x)}`)
    }
  })
})
