//+ ====================================================================================================================
//+
//+ 8 kyu - Twice as old  [ ID: 5b853229cfde412a470000d0 ] (twice-as-old)
//+ URL: https://www.codewars.com/kata/5b853229cfde412a470000d0
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  const twiceAge = (dadYearsOld - sonYearsOld) * 2
  return dadYearsOld > twiceAge ? dadYearsOld - twiceAge : twiceAge - dadYearsOld
}

export { twiceAsOld }
