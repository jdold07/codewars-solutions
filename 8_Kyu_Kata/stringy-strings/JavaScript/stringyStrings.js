// [object Object] - Stringy Strings  [ ID: 563b74ddd19a3ad462000054  (stringy-strings) ]
// URL: https://www.codewars.com/kata/563b74ddd19a3ad462000054
// Category: ALGORITHMS  |  Tags: STRINGS | BINARY | ALGORITHMS
// *****************************************************************************
function stringy(size) {
    let answerString = ""
    
    while (answerString.length < size) {
      if (answerString.length !== size) answerString += "1"
      if (answerString.length !== size) answerString += "0"
    }
    return answerString
  }
