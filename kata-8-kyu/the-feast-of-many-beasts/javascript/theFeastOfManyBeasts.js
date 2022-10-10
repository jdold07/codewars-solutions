//+ ====================================================================================================================
//+
//+ 8 kyu - The Feast of Many Beasts  [ ID: 5aa736a455f906981800360d ] (the-feast-of-many-beasts)
//+ URL: https://www.codewars.com/kata/5aa736a455f906981800360d
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function feast(beast, dish) {
  return beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]
}


module.exports = { feast }
