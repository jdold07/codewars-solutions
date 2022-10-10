//+ ====================================================================================================================
//+
//+ 8 kyu - Twice as old  [ ID: 5b853229cfde412a470000d0 ] (twice-as-old)
//+ URL: https://www.codewars.com/kata/5b853229cfde412a470000d0
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

function twiceAsOld(dad, son) {
  const twiceAge = (dad - son) * 2
  return dad > twiceAge ? dad - twiceAge : twiceAge - dad
}


module.exports = { twiceAsOld }
