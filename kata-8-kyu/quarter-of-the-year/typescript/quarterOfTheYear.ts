//+ ====================================================================================================================
//+
//+ 8 kyu - Quarter of the year  [ ID: 5ce9c1000bab0b001134f5af ] (quarter-of-the-year)
//+ URL: https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function quarterOf(month: number): number {
  return !(month % 3) ? month / 3 : Math.ceil(month / 3)
}

export { quarterOf }
