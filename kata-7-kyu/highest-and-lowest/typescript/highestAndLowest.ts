//+ ====================================================================================================================
//+
//+ 7 kyu - Highest and Lowest  [ ID: 554b4ac871d6813a03000035 ] (highest-and-lowest)
//+ URL: https://www.codewars.com/kata/554b4ac871d6813a03000035
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

class Kata {
  static highAndLow(numbers: string): string {
    const arr = numbers.split(" ").map((v) => +v)
    return [Math.max(...arr), Math.min(...arr)].join(" ")
  }
}

export { Kata }
