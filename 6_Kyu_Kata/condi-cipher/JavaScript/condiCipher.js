// [object Object] - Condi cipher  [ ID: 59bf6b73bf10a4c8e5000047  (condi-cipher) ]
// URL: https://www.codewars.com/kata/59bf6b73bf10a4c8e5000047
// Category: ALGORITHMS  |  Tags: CIPHERS | STRINGS | ALGORITHMS
// *****************************************************************************
function encode(message, key, initShift) {
    let nCur = (nNxt = initShift - 1)
    const abc = [...new Set(key + "abcdefghijklmnopqrstuvwxyz")].reduce((a, c, i) => ({ ...a, [c]: i, [i]: c }), {})
    return message.replace(RegExp(/[a-z]/g), (c) => (([nCur, nNxt] = [nNxt, abc[c]]), abc[(abc[c] + nCur + 1) % 26]))
  }
  
  function decode(message, key, initShift) {
    let nCur = (nNxt = initShift - 1)
    const abc = [...new Set(key + "abcdefghijklmnopqrstuvwxyz")].reduce((a, c, i) => ({ ...a, [c]: i, [i]: c }), {})
    return message.replace(RegExp(/[a-z]/g), (c) => (((nCur = nNxt), (nNxt = (abc[c] - nCur + 51) % 26)), abc[nNxt]))
  }
