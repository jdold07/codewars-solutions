// [object Object] - Atbash Cipher Helper  [ ID: 52f2f5ecc807c0ab1a00001a  (atbash-cipher-helper) ]
// URL: https://www.codewars.com/kata/52f2f5ecc807c0ab1a00001a
// Category: ALGORITHMS  |  Tags: ALGORITHMS | CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS
// *****************************************************************************
function AtbashCipher(abc) {
    this.encode = this.decode = (str) =>
      str.replace(RegExp("[" + abc + "]", "g"), (v) => abc[abc.length - (abc.indexOf(v) + 1)])
  }
// *****************************************************************************
// *****************************************************************************
function AtbashCipher(abc) {
    this.encode = (str) => 
      str.replace(RegExp("[" + abc + "]", "g"), (v) =>
        (x = abc.indexOf(v)) < abc.length / 2 ? abc.substr(-(x + 1), 1) : abc.substr(abc.length - (x + 1), 1))
    this.decode = (str) => 
      str.replace(RegExp("[" + abc + "]", "g"), (v) =>
        (x = abc.indexOf(v)) > abc.length / 2 - 1 ? abc.substr(abc.length - (x + 1), 1) : abc.substr(-(x + 1), 1))
  }

