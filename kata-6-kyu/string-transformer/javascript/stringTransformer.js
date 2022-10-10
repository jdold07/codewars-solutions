//+ ====================================================================================================================
//+
//+ 6 kyu - String transformer  [ ID: 5878520d52628a092f0002d0 ] (string-transformer)
//+ URL: https://www.codewars.com/kata/5878520d52628a092f0002d0
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const stringTransformer = (s) =>
  [
    ...s
      //     .trim()
      //     .replace(/\s{2,}/g, " ")
      .split(" ")
      .reverse()
      .join(" ")
  ].reduce((a, c) => a + (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()), "")

module.exports = { stringTransformer }
