//+ ====================================================================================================================
//+
//+ 8 kyu - Regexp Basics - is it a digit?  [ ID: 567bf4f7ee34510f69000032 ] (regexp-basics-is-it-a-digit)
//+ URL: https://www.codewars.com/kata/567bf4f7ee34510f69000032
//+ Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================

interface String {
  // Necessary, keep it here.
  digit(): boolean
}

String.prototype.digit = function (): boolean {
  return /^\d$/.test(`${this}`)
}
export default String.prototype.digit = function (): boolean {
  return /^\d$/.test(this.toString())
}
