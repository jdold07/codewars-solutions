//+ ====================================================================================================================
//+
//+ 7 kyu - Ordered Count of Characters  [ ID: 57a6633153ba33189e000074 ] (ordered-count-of-characters)
//+ URL: https://www.codewars.com/kata/57a6633153ba33189e000074
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const orderedCount = (text) => [...new Set(text)].map((el) => [el, [...text].filter((char) => char === el).length])

module.exports = { orderedCount }
