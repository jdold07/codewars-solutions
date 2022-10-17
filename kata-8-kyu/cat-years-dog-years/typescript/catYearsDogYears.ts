//+ ====================================================================================================================
//+
//+ 8 kyu - Cat years, Dog years  [ ID: 5a6663e9fd56cb5ab800008b ] (cat-years-dog-years)
//+ URL: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  if (humanYears === 1) return [1, 15, 15]
  if (humanYears === 2) return [2, 24, 24]
  return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24]
}

export { humanYearsCatYearsDogYears }
