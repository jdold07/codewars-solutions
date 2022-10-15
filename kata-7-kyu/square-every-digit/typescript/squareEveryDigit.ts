//+ ====================================================================================================================
//+
//+ 7 kyu - Square Every Digit  [ ID: 546e2562b03326a88e000020 ] (square-every-digit)
//+ URL: https://www.codewars.com/kata/546e2562b03326a88e000020
//+ Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

class Kata {
  static squareDigits(num: number): number {
    return +`${num}`.replace(/\d/g, (v) => `${(+v) ** 2}`)
    // return +[...`${num}`].map((v) => (+v) ** 2).join("")
  }
}

export { Kata }
