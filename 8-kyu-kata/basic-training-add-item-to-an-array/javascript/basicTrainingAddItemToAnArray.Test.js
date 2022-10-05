// 8 kyu - Basic Training: Add item to an Array  [ ID: 511f0fe64ae8683297000001  (basic-training-add-item-to-an-array) ]
// URL: https://www.codewars.com/kata/511f0fe64ae8683297000001
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Checking Content", () => {
  it("Should not be empty", () => {
    assert.isNotEmpty(websites, "The array is still empty")
  })
  it('Should contain "codewars"', () => {
    assert.include(websites, "codewars", 'The array does not contain the correct value "codewars"')
  })
  it("Should only contain 1 item", () => {
    assert.lengthOf(websites, 1)
  })
})

describe("Checking Reference", () => {
  it("Should not create a new array", () => {
    assert.strictEqual(
      _websitesInternal,
      websites,
      "You assigned a new array to the websites variable. You should instead alter the existing reference."
    )
  })
})
