// 7 kyu - Digital cypher  [ ID: 592e830e043b99888600002d  (digital-cypher) ]
// URL: https://www.codewars.com/kata/592e830e043b99888600002d
// Category: REFERENCE  |  Tags: FUNDAMENTALS | CIPHERS | CRYPTOGRAPHY
// *****************************************************************************
const encode = (str, n) => [...str].reduce((a, c, i) => [...a, c.charCodeAt() - 96 + +`${n}`[i % `${n}`.length]], [])
