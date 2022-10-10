/* eslint-disable no-undef */
//+ ====================================================================================================================
//+
//+ 6 kyu - Image host filename generator  [ ID: 586a933fc66d187b6e00031a ] (image-host-filename-generator)
//+ URL: https://www.codewars.com/kata/586a933fc66d187b6e00031a
//+ Category: REFERENCE  |  Tags: LOGIC | OBJECT-ORIENTED PROGRAMMING | STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const generateName = () =>
  !photoManager.nameExists((x = [...Array(6)].map(() => String.fromCharCode((Math.random() * 42 + 48) | 0)).join("")))
    ? x
    : generateName()

//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

const nameManager = function () {
  const names = []

  this.nameExists = function (name) {
    return names.indexOf(name) != -1
  }

  this.addName = function (name) {
    names.push(name)
  }

  this.nameWasUnique = function (name) {
    if (!this.nameExists(name)) {
      this.addName(name)
      return true
    }

    return false
  }
}

const photoManager = new nameManager()

//+ ====================================================================================================================

module.exports = { generateName, photoManager }
