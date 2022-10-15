//+ ====================================================================================================================
//+
//+ 7 kyu - Disemvowel Trolls  [ ID: 52fba66badcd10859f00097e ] (disemvowel-trolls)
//+ URL: https://www.codewars.com/kata/52fba66badcd10859f00097e
//+ Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================

class Kata {
  static disemvowel(str: string): string {
    return str.replace(/[aeiou]/gi, "")
  }
}

export { Kata }
