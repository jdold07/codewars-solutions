// 8 kyu - Alan Partridge II - Apple Turnover  [ ID: 580a094553bd9ec5d800007d  (alan-partridge-ii-apple-turnover) ]
// URL: https://www.codewars.com/kata/580a094553bd9ec5d800007d
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | MATHEMATICS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Alan Partridge II - Apple Turnover", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(apple("50"), "It's hotter than the sun!!")
    assert.strictEqual(apple(4), "Help yourself to a honeycomb Yorkie for the glovebox.")
    assert.strictEqual(apple("12"), "Help yourself to a honeycomb Yorkie for the glovebox.")
    assert.strictEqual(apple(60), "It's hotter than the sun!!")
  })

  it("Random tests", () => {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
    function myapple(x) {
      return Number(x) * Number(x) > 1000
        ? "It's hotter than the sun!!"
        : "Help yourself to a honeycomb Yorkie for the glovebox."
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
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59",
      "60",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60
    ]

    for (let i = 0; i < 300; i++) {
      let x = names[randint(0, names.length - 1)]
      assert.strictEqual(apple(x), myapple(x), `Testing for ${JSON.stringify(x)}`)
    }
  })
})
