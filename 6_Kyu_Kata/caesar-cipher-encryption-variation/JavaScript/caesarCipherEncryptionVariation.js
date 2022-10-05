// [object Object] - Caesar Cipher Encryption - Variation  [ ID: 55ec55323c89fc5fbd000019  (caesar-cipher-encryption-variation) ]
// URL: https://www.codewars.com/kata/55ec55323c89fc5fbd000019
// Category: ALGORITHMS  |  Tags: ALGORITHMS | CRYPTOGRAPHY
// *****************************************************************************
const caesarEncode = (s, n) =>
    [...s].reduce((a, c) => a + (!/\s/.test(c) ? String.fromCharCode(((c.charCodeAt() - 97 + n) % 26) + 97) : ++n && c), "")
