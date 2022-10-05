// [object Object] - Case Swapping  [ ID: 5590961e6620c0825000008f  (case-swapping) ]
// URL: https://www.codewars.com/kata/5590961e6620c0825000008f
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const swap = (s) => [...s].reduce((a, c) => a + (c.toUpperCase() === c ? c.toLowerCase() : c.toUpperCase()), "")
  // const swap = (s) => s.replace(/(?<lc>[a-z])|(?<uc>[A-Z])/g, (_, lc, uc) => (lc ? lc.toUpperCase() : uc.toLowerCase()))
// *****************************************************************************
// *****************************************************************************
const swap = (s) => s.replace(/(?<lc>[a-z])|(?<uc>[A-Z])/g, (_, lc, uc) => (lc ? lc.toUpperCase() : uc.toLowerCase()))
  // const swap = (s) => [...s].reduce((a, c) => a + (c.toUpperCase() === c ? c.toLowerCase() : c.toUpperCase()), "")

