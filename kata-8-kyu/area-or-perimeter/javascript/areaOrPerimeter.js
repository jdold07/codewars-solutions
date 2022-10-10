//+ ====================================================================================================================
//+
//+ 8 kyu - Area or Perimeter  [ ID: 5ab6538b379d20ad880000ab ] (area-or-perimeter)
//+ URL: https://www.codewars.com/kata/5ab6538b379d20ad880000ab
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : (l + w) * 2
}

module.exports = { areaOrPerimeter }
