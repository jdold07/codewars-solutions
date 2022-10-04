// 6 kyu - Kama Sutra Cipher Helper  [ ID: 5361372e700d2a9627000cf1  (kama-sutra-cipher-helper) ]
// URL: https://www.codewars.com/kata/5361372e700d2a9627000cf1
// Category: undefined  |  Tags: CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS | ALGORITHMS
// *****************************************************************************
function KamaSutraCipher(key) {
  this.myKey = key.reduce((a, [k, v]) => ({ ...a, [k]: v, [v]: k }), {})
  this.encode = (str) => str.replace(RegExp("[" + Object.keys(this.myKey).join("") + "]", "g"), (v) => this.myKey[v])
  this.decode = (str) => this.encode(str)
}
