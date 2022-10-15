//+ ====================================================================================================================
//+
//+ 7 kyu - Isograms  [ ID: 54ba84be607a92aa900000f1 ] (isograms)
//+ URL: https://www.codewars.com/kata/54ba84be607a92aa900000f1
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function isIsogram(str: string): boolean {
  return [...new Set(str.toLowerCase())].join("") === str.toLowerCase()
}

export { isIsogram }
