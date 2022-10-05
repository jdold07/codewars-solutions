// 5 kyu - Rot13  [ ID: 530e15517bc88ac656000716  (rot13-1) ]
// URL: https://www.codewars.com/kata/530e15517bc88ac656000716
// Category: REFERENCE  |  Tags: CIPHERS | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;

// reference solution by monadius
function referenceSolution(message) {
  let result = []
  for (let ch of message) {
    let d = /[a-z]/.test(ch) ? 97 : /[A-Z]/.test(ch) ? 65 : 0
    if (d > 0) {
      result.push(String.fromCharCode((ch.charCodeAt(0) - d + 13) % 26 + d))
    }
    else {
      result.push(ch)
    }
  }
  return result.join('')
}

describe("Tests", function() {
  it("Fixed tests", function() {
    for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"], ["Codewars", "Pbqrjnef"], ["Ruby is cool!", "Ehol vf pbby!"], ["10+2 is twelve.", "10+2 vf gjryir."], ["abcdefghijklmnopqrstuvwxyz", "nopqrstuvwxyzabcdefghijklm"]]) {
      assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`);
    }
  });
  it("Random tests", function() {
    const allChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ \n'
    for (let i = 0 ; i < 100 ; i++) {
      const len = Math.floor(Math.random() * 17)
      let s = ""
      for (let j = 0 ; j < len ;j++) {
        s += allChars[Math.floor(allChars.length * Math.random())]
      }
      assert.strictEqual(rot13(s), referenceSolution(s), `Test failed with messsage = '${s}'`);
    }
  });
});

