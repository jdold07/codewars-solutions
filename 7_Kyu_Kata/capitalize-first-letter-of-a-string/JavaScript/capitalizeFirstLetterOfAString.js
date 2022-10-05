// [object Object] - Capitalize first letter of a string  [ ID: 56c19316e8b139dff60006da  (capitalize-first-letter-of-a-string) ]
// URL: https://www.codewars.com/kata/56c19316e8b139dff60006da
// Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING | REGULAR EXPRESSIONS
// *****************************************************************************
String.prototype.capitalize = function () {
    return this.replace(/(^[a-z])/, (c) => String.fromCharCode(c.charCodeAt() - 32))
  }
// *****************************************************************************
// *****************************************************************************
String.prototype.capitalize = function () {
    return (x = this.match(/(^.)(.*$)/)[1].charCodeAt()) > 96 && x < 123
      ? this.replace(/(^.)(.*$)/, String.fromCharCode(x - 32) + "$2")
      : this.slice(0)
  }

