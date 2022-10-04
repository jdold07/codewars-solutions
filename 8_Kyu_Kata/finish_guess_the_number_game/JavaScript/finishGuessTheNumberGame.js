// 8 kyu - Finish Guess the Number Game  [ ID: 568018a64f35f0c613000054  (finish-guess-the-number-game) ]
// URL: https://www.codewars.com/kata/568018a64f35f0c613000054
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
class Guesser {
  constructor(number, lives) {
    this.number = number
    this.lives = lives
  }
  dead() {
    throw "You're Dead!"
  }
  guess(n) {
    return !this.lives ? this.dead() : n === this.number || (--this.lives, false)
  }
}
// *****************************************************************************
// *****************************************************************************
class Guesser {
  constructor(number, lives) {
    this.number = number
    this.lives = lives
  }
  dead() {
    throw "You're Dead!"
  }
  guess(n) {
    return this.lives < 1 ? this.dead() : (this.lives > 0 && n === this.number) || (--this.lives < -1 && false)
  }
}
