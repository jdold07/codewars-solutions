/* eslint-disable no-undef */
//+ ====================================================================================================================
//+
//+ 7 kyu - See You Next Happy Year   [ ID: 5ae7e3f068e6445bc8000046 ] (see-you-next-happy-year)
//+ URL: https://www.codewars.com/kata/5ae7e3f068e6445bc8000046
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const nextHappyYear = (year) =>
  (x = `${++year}`.split("")).every((v) => x.indexOf(v) === x.lastIndexOf(v)) ? year : nextHappyYear(year)

module.exports = { nextHappyYear }
