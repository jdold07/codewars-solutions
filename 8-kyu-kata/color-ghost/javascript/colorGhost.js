// 8 kyu - Color Ghost  [ ID: 53f1015fa9fe02cbda00111a  (color-ghost) ]
// URL: https://www.codewars.com/kata/53f1015fa9fe02cbda00111a
// Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS
// *****************************************************************************
class Ghost {
    constructor() {
      this.color = ["white", "yellow", "purple", "red"][Math.floor(Math.random() * 4)]
    }
  }
