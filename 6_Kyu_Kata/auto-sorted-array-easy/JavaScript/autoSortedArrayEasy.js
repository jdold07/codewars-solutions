// [object Object] - Auto Sorted Array - Easy  [ ID: 5a0ddb08c374cb18e900006b  (auto-sorted-array-easy) ]
// URL: https://www.codewars.com/kata/5a0ddb08c374cb18e900006b
// Category: REFERENCE  |  Tags: FUNDAMENTALS | SORTING | LANGUAGE FEATURES | OBJECT-ORIENTED PROGRAMMING
// *****************************************************************************
function SortedArray(type) {
    if (!["asc", "desc"].includes(type)) throw new Error("Wrong sort type!")
    Array.sortType = type
    return (this.arr = [])
  }
  
  Array.prototype.insert = function (...props) {
    props.forEach((v) => this.push(v))
    this.sort((a, b) => (Array.sortType === "asc" ? a - b : b - a))
    return this.length
  }
