// [object Object] - Implement Array.prototype.filter()  [ ID: 56dd9b84fe5754786f0014f7  (implement-array-dot-prototype-dot-filter-1) ]
// URL: https://www.codewars.com/kata/56dd9b84fe5754786f0014f7
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
Array.prototype.filter = function (func) {
    const filteredArray = []
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) {
        filteredArray.push(this[i])
      }
    }
    return filteredArray
  }
