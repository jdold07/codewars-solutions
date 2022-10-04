// 8 kyu - Tip Calculator  [ ID: 56598d8076ee7a0759000087  (tip-calculator) ]
// URL: https://www.codewars.com/kata/56598d8076ee7a0759000087
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const calculateTip = (amount, rating) =>
  Math.ceil(amount * { excellent: 0.2, great: 0.15, good: 0.1, poor: 0.05 }[rating.toLowerCase()]) ||
  (rating.toLowerCase() === "terrible" ? 0 : "Rating not recognised")
