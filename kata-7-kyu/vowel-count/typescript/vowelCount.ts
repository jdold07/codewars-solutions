//+ ====================================================================================================================
//+
//+ 7 kyu - Vowel Count  [ ID: 54ff3102c1bad923760001f3 ] (vowel-count)
//+ URL: https://www.codewars.com/kata/54ff3102c1bad923760001f3
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

class Kata {
  static getCount(str: string): number {
    return (str.match(/[aeiou]/g) || []).length
    //     return str.replace(/[^aeiou]/g, "").length
  }
}

export { Kata }
