//+ ====================================================================================================================
//+
//+ 8 kyu - How old will I be in 2099?  [ ID: 5761a717780f8950ce001473 ] (how-old-will-i-be-in-2099)
//+ URL: https://www.codewars.com/kata/5761a717780f8950ce001473
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const calculateAge = (birth, calc) =>
  calc - birth === 0
    ? "You were born this very year!"
    : calc - birth > 0
    ? `You are ${calc - birth} year${calc - birth === 1 ? "" : "s"} old.`
    : `You will be born in ${Math.abs(calc - birth)} year${calc - birth === -1 ? "" : "s"}.`

module.exports = { calculateAge }
