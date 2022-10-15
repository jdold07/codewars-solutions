//+ ====================================================================================================================
//+
//+ 6 kyu - Counting Duplicates  [ ID: 54bf1c2cd5b56cc47f0007a1 ] (counting-duplicates)
//+ URL: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function duplicateCount(text: string): number {
  return new Set([...text.toLowerCase()].filter((v, _, a) => a.indexOf(v) !== a.lastIndexOf(v))).size
}

export { duplicateCount }
