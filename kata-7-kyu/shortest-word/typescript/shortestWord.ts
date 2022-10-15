//+ ====================================================================================================================
//+
//+ 7 kyu - Shortest Word  [ ID: 57cebe1dc6fdc20c57000ac9 ] (shortest-word)
//+ URL: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function findShort(s: string): number {
  return s.split(" ").reduce((a, c) => (c.length < a ? c.length : a), Infinity)
}


export { findShort }
