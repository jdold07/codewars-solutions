//+ ====================================================================================================================
//+
//+ 8 kyu - Transportation on vacation   [ ID: 568d0dd208ee69389d000016 ] (transportation-on-vacation)
//+ URL: https://www.codewars.com/kata/568d0dd208ee69389d000016
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function rentalCarCost(d) {
  if (d >= 7) return d * 40 - 50
  if (d >= 3) return d * 40 - 20
  return d * 40
}


module.exports = { rentalCarCost }
