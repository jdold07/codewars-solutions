//+ ====================================================================================================================
//+
//+ 7 kyu - You're a square!  [ ID: 54c27a33fb7da0db0100040e ] (youre-a-square)
//+ URL: https://www.codewars.com/kata/54c27a33fb7da0db0100040e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

function isSquare(n: number): boolean {
  return Math.floor(n ** 0.5) === n ** 0.5
}

export { isSquare }
