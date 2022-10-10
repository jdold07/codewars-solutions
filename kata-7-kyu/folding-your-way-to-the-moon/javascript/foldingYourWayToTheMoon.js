//+ ====================================================================================================================
//+
//+ 7 kyu - Folding your way to the moon  [ ID: 58f0ba42e89aa6158400000e ] (folding-your-way-to-the-moon)
//+ URL: https://www.codewars.com/kata/58f0ba42e89aa6158400000e
//+ Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const foldTo = (distance, folds = 0) =>
  distance < 0 ? null : distance < 0.0001 * 2 ** folds ? folds : foldTo(distance, ++folds)

module.exports = { foldTo }
