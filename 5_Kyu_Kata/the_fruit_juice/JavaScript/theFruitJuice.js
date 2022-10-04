// 5 kyu - The Fruit Juice  [ ID: 5264603df227072e6500006d  (the-fruit-juice) ]
// URL: https://www.codewars.com/kata/5264603df227072e6500006d
// Category: undefined  |  Tags: OBJECT-ORIENTED PROGRAMMING | ALGORITHMS
// *****************************************************************************
class Jar {
  constructor() {
    this.volume = 0
    this.juices = {}
  }

  add(amount, type) {
    this.juices[type] = (this.juices[type] || 0) + amount
    this.volume += amount
  }

  pourOut(out) {
    Object.entries(this.juices).forEach(
      ([type, typeCurAmnt]) => (this.juices[type] = this.juices[type] - (typeCurAmnt / this.volume) * out)
    )
    this.volume -= out
  }

  getTotalAmount() {
    return this.volume
  }

  getConcentration(type) {
    if (!this.juices[type] || !this.volume) return 0
    return this.juices[type] / this.volume
  }
}
