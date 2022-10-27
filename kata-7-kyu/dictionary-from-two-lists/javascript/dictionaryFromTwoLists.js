//+ ====================================================================================================================
//+
//+ 7 kyu - Dictionary from two lists  [ ID: 5533c2a50c4fea6832000101 ] (dictionary-from-two-lists)
//+ URL: https://www.codewars.com/kata/5533c2a50c4fea6832000101
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function createDict(keys, values) {
  while (keys.length > values.length) {
    values.push(null)
  }
  return keys.reduce((a, c, i) => ({ ...a, [c]: values[i] }), {})
}

module.exports = { createDict }
