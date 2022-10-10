//+ ====================================================================================================================
//+
//+ 7 kyu - Stanton measure  [ ID: 59a1cdde9f922b83ee00003b ] (stanton-measure)
//+ URL: https://www.codewars.com/kata/59a1cdde9f922b83ee00003b
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const stantonMeasure = (arr) => arr.filter((v) => v === arr.filter((e) => e === 1).length).length

module.exports = { stantonMeasure }
