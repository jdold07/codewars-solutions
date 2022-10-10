//+ ====================================================================================================================
//+
//+ 6 kyu - Error correction #1 - Hamming Code  [ ID: 5ef9ca8b76be6d001d5e1c3e ] (error-correction-number-1-hamming-code)
//+ URL: https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS | BITS
//+
//+ ====================================================================================================================

const encode = (text) =>
  [...text]
    .map((v) =>
      `0000000${v.charCodeAt().toString(2)}`
        .slice(-8)
        .split("")
        .map((v) => v.repeat(3))
        .join("")
    )
    .join("")

const decode = (bits) =>
  bits
    .match(/.../g)
    .reduce((a, [c1, c2, c3]) => a + ([c2, c3].includes(c1) ? c1 : c2), "")
    .match(/.{8}/g)
    .map((v) => String.fromCharCode(parseInt(v, 2)))
    .join("")

module.exports = { encode, decode }
