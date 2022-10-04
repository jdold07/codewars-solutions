// 6 kyu - Image host filename generator  [ ID: 586a933fc66d187b6e00031a  (image-host-filename-generator) ]
// URL: https://www.codewars.com/kata/586a933fc66d187b6e00031a
// Category: undefined  |  Tags: LOGIC | OBJECT-ORIENTED PROGRAMMING | STRINGS | FUNDAMENTALS
// *****************************************************************************
const generateName = () =>
  !photoManager.nameExists((x = [...Array(6)].map((v) => String.fromCharCode((Math.random() * 42 + 48) | 0)).join("")))
    ? x
    : generateName()
