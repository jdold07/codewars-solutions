// 6 kyu - Simple Substitution Cipher Helper  [ ID: 52eb114b2d55f0e69800078d  (simple-substitution-cipher-helper) ]
// URL: https://www.codewars.com/kata/52eb114b2d55f0e69800078d
// Category: ALGORITHMS  |  Tags: CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS | ALGORITHMS
// *****************************************************************************
function SubstitutionCipher(abc1, abc2) {
    this.encode = function (str) {
      return [...str].reduce((a, c) => a + ((x = abc2[abc1.indexOf(c)]) ? x : c), "")
    }
    this.decode = function (str) {
      return [...str].reduce((a, c) => a + ((x = abc1[abc2.indexOf(c)]) ? x : c), "")
    }
  }
