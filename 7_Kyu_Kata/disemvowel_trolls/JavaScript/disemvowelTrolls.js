// 7 kyu - Disemvowel Trolls  [ ID: 52fba66badcd10859f00097e  (disemvowel-trolls) ]
// URL: https://www.codewars.com/kata/52fba66badcd10859f00097e
// Category: undefined  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
// *****************************************************************************
function disemvowel(str) {
      const arr = str.split("")
      let newString = ""
      
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === "a" || 
          arr[i].toLowerCase() === "e" ||
          arr[i].toLowerCase() === "i" ||
          arr[i].toLowerCase() === "o" ||
          arr[i].toLowerCase () === "u") {
          }else {
            newString += arr[i]
          }
        }
      str = newString
      return str
    }
