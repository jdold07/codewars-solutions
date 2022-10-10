/* eslint-disable no-undef */
//+ ====================================================================================================================
//+
//+ 5 kyu - Second Variation on Caesar Cipher  [ ID: 55084d3898b323f0aa000546 ] (second-variation-on-caesar-cipher)
//+ URL: https://www.codewars.com/kata/55084d3898b323f0aa000546
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | CIPHERS | CRYPTOGRAPHY
//+
//+ ====================================================================================================================

const encodeStr = (s, n) => {
  const s2 =
    s[0].toLowerCase() +
    String.fromCharCode(((s.toLowerCase().charCodeAt() + n - 97) % 26) + 97) +
    s.replace(/[a-z]/gi, (v) =>
      String.fromCharCode((x = v.charCodeAt()) > 96 ? ((x - 97 + n) % 26) + 97 : ((x - 65 + n) % 26) + 65)
    )

  return s2.match(RegExp(".{1," + Math.ceil(s2.length / 5) + "}", "g")).filter(Boolean)
}

const decode = (arr) => {
  const n = (arr[0].charCodeAt(1) % 26) - (arr[0].charCodeAt(0) % 26)

  return arr
    .join("")
    .slice(2)
    .replace(/[a-z]/gi, (v) =>
      String.fromCharCode((x = v.charCodeAt()) > 96 ? ((x - 97 - n) % 26) + 97 : ((x - 65 - n) % 26) + 65)
    )
}

// =====================================================================================================================
// =====================================================================================================================

const encodeStr2 = (s, n) => {
  const s2 =
    s[0].toLowerCase() +
    String.fromCharCode(((s.toLowerCase().charCodeAt() + n - 97) % 26) + 97) +
    s.replace(/[a-z]/gi, (v) =>
      String.fromCharCode((x = v.charCodeAt()) > 96 ? ((x - 97 + n) % 26) + 97 : ((x - 65 + n) % 26) + 65)
    )

  return [...Array(Math.ceil(s2.length / 4) + 1).keys()]
    .slice(1)
    .reduce(
      (a, c) =>
        (x = s2.length / c) <= 5 && x >= 4
          ? x > 4
            ? s2.length % c > (a.length === 5 ? a[4].length : 0) || !(s2.length % c)
              ? (a = s2.match(RegExp(".{1," + c + "}", "g")))
              : a
            : x > a.length
            ? (a = s2.match(RegExp(".{1," + c + "}", "g")))
            : a
          : a,
      []
    )
}

const decode2 = (arr) => {
  const n = (arr[0][1].charCodeAt() % 26) - (arr[0][0].charCodeAt() % 26)

  return arr
    .join("")
    .slice(2)
    .replace(/[a-z]/gi, (v) =>
      String.fromCharCode((x = v.charCodeAt()) > 96 ? ((x - 97 - n) % 26) + 97 : ((x - 65 - n) % 26) + 65)
    )
}

module.exports = { encodeStr, decode, encodeStr2, decode2 }
