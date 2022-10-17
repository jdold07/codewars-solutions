//+ ====================================================================================================================
//+
//+ 8 kyu - Expressions Matter   [ ID: 5ae62fcf252e66d44d00008e ] (expressions-matter)
//+ URL: https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
//+ Category: REFERENCE  |  Tags: ALGORITHMS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function expressionsMatter(a: number, b: number, c: number): number {
  return Math.max(a * b * c, a * (b + c), (a + b) * c, a + b + c, a + b * c, a * b + c)
}

export { expressionsMatter }
