//+ ====================================================================================================================
//+
//+ 7 kyu - Mumbling  [ ID: 5667e8f4e3f572a8f2000039 ] (mumbling)
//+ URL: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | PUZZLES
//+
//+ ====================================================================================================================

function accum(s: string): string {
  return [...s].map((v, i) => v.toUpperCase() + v.toLowerCase().repeat(i)).join("-")
}

export { accum }
