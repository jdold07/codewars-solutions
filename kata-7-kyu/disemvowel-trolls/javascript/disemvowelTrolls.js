//+ ====================================================================================================================
//+
//+ 7 kyu - Disemvowel Trolls  [ ID: 52fba66badcd10859f00097e ] (disemvowel-trolls)
//+ URL: https://www.codewars.com/kata/52fba66badcd10859f00097e
//+ Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const disemvowel = (str) => str.replace(/[aeiou]/gi, "")

//+ ====================================================================================================================
//+ ====================================================================================================================

function disemvowel2(str) {
  const arr = str.split("")
  let newString = ""

  for (let i = 0; i < arr.length; i++) {
    if (
      !(
        arr[i].toLowerCase() === "a" ||
        arr[i].toLowerCase() === "e" ||
        arr[i].toLowerCase() === "i" ||
        arr[i].toLowerCase() === "o" ||
        arr[i].toLowerCase() === "u"
      )
    ) {
      newString += arr[i]
    }
  }
  str = newString
  return str
}

module.exports = { disemvowel, disemvowel2 }
