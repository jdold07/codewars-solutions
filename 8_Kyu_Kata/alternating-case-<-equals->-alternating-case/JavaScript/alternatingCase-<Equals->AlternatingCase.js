// [object Object] - altERnaTIng cAsE <=> ALTerNAtiNG CaSe  [ ID: 56efc695740d30f963000557  (alternating-case-<-equals->-alternating-case) ]
// URL: https://www.codewars.com/kata/56efc695740d30f963000557
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
String.prototype.toAlternatingCase = function () {
    let newStr = ""
    for (let i = 0; i < this.length; i++){
      if (this[i] === this[i].toUpperCase()) {
        newStr += this[i].toLowerCase()
      }else {
        newStr += this[i].toUpperCase()
      }
    }
    return newStr
  }
