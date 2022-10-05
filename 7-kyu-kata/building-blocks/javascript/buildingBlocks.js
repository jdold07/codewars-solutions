// 7 kyu - Building blocks  [ ID: 55b75fcf67e558d3750000a3  (building-blocks) ]
// URL: https://www.codewars.com/kata/55b75fcf67e558d3750000a3
// Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS
// *****************************************************************************
class Block {
  constructor([w, l, h]) {
    this.width = w
    this.length = l
    this.height = h
  }
  getWidth() {
    return this.width
  }
  getLength() {
    return this.length
  }
  getHeight() {
    return this.height
  }
  getVolume() {
    return this.length * this.width * this.height
  }
  getSurfaceArea() {
    return (this.width * this.height + this.length * this.width + this.length * this.height) * 2
  }
}
