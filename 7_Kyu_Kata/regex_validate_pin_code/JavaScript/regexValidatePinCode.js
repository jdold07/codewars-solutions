// 7 kyu - Regex validate PIN code  [ ID: 55f8a9c06c018a0d6e000132  (regex-validate-pin-code) ]
// URL: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
// Category: undefined  |  Tags: REGULAR EXPRESSIONS | FUNDAMENTALS
// *****************************************************************************
const validatePIN = (pin) => (pin == pin.match(/^[0-9]{4}$|^[0-9]{6}$/gm) ? true : false)
