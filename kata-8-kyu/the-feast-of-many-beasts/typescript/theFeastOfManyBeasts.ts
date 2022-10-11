//+ ====================================================================================================================
//+
//+ 8 kyu - The Feast of Many Beasts  [ ID: 5aa736a455f906981800360d ] (the-feast-of-many-beasts)
//+ URL: https://www.codewars.com/kata/5aa736a455f906981800360d
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function feast2(beast: string, dish: string): boolean {
  const lcBeast = beast.toLowerCase()
  const lcDish = dish.toLowerCase()
  return lcBeast[0] === lcDish[0] && lcBeast.slice(-1) === lcDish.slice(-1)
}

//+ ====================================================================================================================
//+ ====================================================================================================================

function feast(beast: string, dish: string): boolean {
  return beast.toLowerCase().replace(/(?<=^\w)(.*)(?=\w$)/, "") === dish.toLowerCase().replace(/(?<=^\w)(.*)(?=\w$)/, "")
}

export { feast, feast2 }
