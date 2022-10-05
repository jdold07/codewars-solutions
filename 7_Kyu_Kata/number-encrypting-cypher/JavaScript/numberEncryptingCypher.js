// [object Object] - Number encrypting: cypher  [ ID: 57aa3927e298a757820000a8  (number-encrypting-cypher) ]
// URL: https://www.codewars.com/kata/57aa3927e298a757820000a8
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | CIPHERS | CRYPTOGRAPHY
// *****************************************************************************
const key = {I: 1, l: 1, R: 2, z: 2, E: 3, e: 3, A: 4, a: 4, S: 5, 
               s: 5, G: 6, b: 6, T: 7, t: 7, B: 8, g: 9, O: 0, o: 0}
  
  const cypher = (s) => s.replace(RegExp("[" + [...Object.keys(key)].join("") + "]", "g"), (v) => key[v])
