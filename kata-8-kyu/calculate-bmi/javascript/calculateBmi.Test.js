//+ ====================================================================================================================
//+
//+ 8 kyu - Calculate BMI  [ ID: 57a429e253ba3381850000fb ] (calculate-bmi)
//+ URL: https://www.codewars.com/kata/57a429e253ba3381850000fb
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { bmi } = require("./calculateBmi")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(bmi(50, 1.8), "Underweight")
    assert.strictEqual(bmi(80, 1.8), "Normal")
    assert.strictEqual(bmi(90, 1.8), "Overweight")
    assert.strictEqual(bmi(110, 1.8), "Obese")

    console.log("Random tests")

    function sol(weight, height) {
      let v = weight / (height * height)

      if (v <= 18.5) return "Underweight"
      else if (v <= 25.0) return "Normal"
      else if (v <= 30.0) return "Overweight"
      else return "Obese"
    }

    for (let i = 0; i < 25; i++) {
      let target = Math.random() * 20 + 15
      let height = Math.random() * 0.5 + 1.5
      let weight = target * height * height
      assert.strictEqual(bmi(weight, height), sol(weight, height))
    }
  })
})
