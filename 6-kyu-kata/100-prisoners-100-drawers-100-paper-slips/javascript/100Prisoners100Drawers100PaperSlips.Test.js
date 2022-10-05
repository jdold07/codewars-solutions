// 6 kyu - 100 prisoners, 100 drawers, 100 paper slips  [ ID: 62beb65c0f0b30424cbf441a  (100-prisoners-100-drawers-100-paper-slips) ]
// URL: https://www.codewars.com/kata/62beb65c0f0b30424cbf441a
// Category: GAMES  |  Tags: PUZZLES | MATHEMATICS | PROBABILITY | LOGIC
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Your strategy", () => {
  it("should succeed at least 20 out of 100 tries", () => {
    const getContext = () => {
      let processComplete = false
      let success = false
      let currentPrisoner = 0
      const drawers = Array(100)
        .fill(0)
        .map((_, i) => i)
        .sort(() => Math.sign(Math.random() - 0.5))
      let opened = new Set()
      const context = {}
      context.isProcessComplete = () => processComplete
      context.isSuccess = () => success
      context.getCurrentPrisoner = () => currentPrisoner
      context.openDrawer = (label) => {
        if (processComplete) return
        if (typeof label !== "number" || label % 1 !== 0 || label < 0 || label >= 100) return { valid: false }
        if (opened.has(label)) return { valid: false }
        opened.add(label)
        const slipLabel = drawers[label]
        if (opened.size >= 50 && slipLabel !== currentPrisoner) {
          processComplete = true
          success = false
          return
        }
        if (slipLabel === currentPrisoner) {
          if (++currentPrisoner >= 100) {
            processComplete = true
            success = true
            return { valid: true, success: true }
          }
          opened = new Set()
          return { valid: true, success: true }
        }
        return { valid: true, success: false, slipLabel }
      }
      Object.freeze(context)
      return context
    }
    Object.freeze(getContext)
    let successes = 0
    for (let i = 0; i < 100; ++i) {
      const context = getContext()
      solve100Prisoners(context)
      if (context.isSuccess()) ++successes
    }
    assert.isAtLeast(successes, 20)
  })
})
