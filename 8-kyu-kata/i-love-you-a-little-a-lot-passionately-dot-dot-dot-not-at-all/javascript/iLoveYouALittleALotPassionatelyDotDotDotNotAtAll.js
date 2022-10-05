// 8 kyu - I love you,  a little ,  a lot,  passionately ... not at all  [ ID: 57f24e6a18e9fad8eb000296  (i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all) ]
// URL: https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
function howMuchILoveYou(nbPetals) {
  const options = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
  while (nbPetals > 6) {
    nbPetals -= 6
  }
  return options[nbPetals - 1]
}
