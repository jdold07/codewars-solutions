// 6 kyu - Keyword Cipher Helper  [ ID: 535c1c80cdbf5011e600030f  (keyword-cipher-helper) ]
// URL: https://www.codewars.com/kata/535c1c80cdbf5011e600030f
// Category: undefined  |  Tags: CRYPTOGRAPHY | CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS
// *****************************************************************************
function KeywordCipher(abc, keyword) {
    const key =
      keyword.split("").reduce((a, c) => (a.includes(c) ? a : a + c), "") +
      abc.replace(RegExp("[" + keyword + "]", "g"), "")
    const eMap = abc.split("").reduce((a, c, i) => ({ ...a, [c]: key[i] }), {})
    const dMap = key.split("").reduce((a, c, i) => ({ ...a, [c]: abc[i] }), {})
  
    this.encode = (str) => str.replace(RegExp("[" + abc + "]", "g"), (v) => eMap[v])
    this.decode = (str) => str.replace(RegExp("[" + abc + "]", "g"), (v) => dMap[v])
  }
