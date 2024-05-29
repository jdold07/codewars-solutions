//+ ====================================================================================================================
//+
//+ 7 kyu - Help the Fruit Guy  [ ID: 557af4c6169ac832300000ba ] (help-the-fruit-guy)
//+ URL: https://www.codewars.com/kata/557af4c6169ac832300000ba
//+ Category: REFERENCE  |  Tags: ARRAYS | STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { removeRotten } = require("./helpTheFruitGuy")

describe("Tests", () => {
  it("test", () => {
    const sol = (bagOfFruits) => (bagOfFruits || []).map((fruit) => fruit.replace("rotten", "").toLowerCase())

    assert.deepEqual(removeRotten(["apple", "banana", "kiwi", "melon", "orange"]), [
      "apple",
      "banana",
      "kiwi",
      "melon",
      "orange"
    ])
    assert.deepEqual(removeRotten(["rottenApple", "rottenBanana", "rottenApple", "rottenPineapple", "rottenKiwi"]), [
      "apple",
      "banana",
      "apple",
      "pineapple",
      "kiwi"
    ])
    assert.deepEqual(removeRotten([]), [], "empty array returns empty array")
    assert.deepEqual(removeRotten(null), [], "null returns empty array")
    assert.deepEqual(removeRotten(), [])
    assert.deepEqual(removeRotten(["apple", "rottenBanana", "rottenApple", "pineapple", "kiwi"]), [
      "apple",
      "banana",
      "apple",
      "pineapple",
      "kiwi"
    ])

    const fruit = [
      "apple",
      "tomato",
      "mango",
      "kiwi",
      "banana",
      "strawberry",
      "melon",
      "blueberry",
      "rottenBlueberry",
      "rottenMelon",
      "rottenApple",
      "rottenTomato",
      "rottenMango",
      "rottenKiwi",
      "rottenBanana",
      "rottenStrawberry"
    ]

    for (let i = 0; i < 100; i++) {
      const fruitArr = []
      for (let j = 0; j < ~~(Math.random() * 100); j++) {
        fruitArr.push(fruit[~~(Math.random() * 12)])
      }
      const answer = sol(fruitArr)

      assert.deepEqual(removeRotten(fruitArr), answer)
    }
  })
})
