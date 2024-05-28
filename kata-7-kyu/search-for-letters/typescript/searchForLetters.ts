//+ ====================================================================================================================
//+
//+ 7 kyu - Search for letters  [ ID: 52dbae61ca039685460001ae ] (search-for-letters)
//+ URL: https://www.codewars.com/kata/52dbae61ca039685460001ae
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const change = (s: string) =>
  new Array(26)
    .fill(0)
    .map((_, i) => (s.toUpperCase().includes(String.fromCharCode(65 + i)) ? 1 : 0))
    .join("")

export { change }
