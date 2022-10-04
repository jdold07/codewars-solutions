// 8 kyu - "this" is a problem   [ ID: 547c71fdc5b2b38db1000098  (this-is-a-problem) ]
// URL: https://www.codewars.com/kata/547c71fdc5b2b38db1000098
// Category: undefined  |  Tags: FUNDAMENTALS | LANGUAGE FEATURES | OBJECT-ORIENTED PROGRAMMING
// *****************************************************************************
function NameMe(first, last) {
  this.firstName = first
  this.lastName = last
  this.name = this.firstName + " " + this.lastName
}
