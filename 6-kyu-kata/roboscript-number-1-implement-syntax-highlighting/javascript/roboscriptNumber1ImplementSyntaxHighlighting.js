// 6 kyu - RoboScript #1 - Implement Syntax Highlighting  [ ID: 58708934a44cfccca60000c4  (roboscript-number-1-implement-syntax-highlighting) ]
// URL: https://www.codewars.com/kata/58708934a44cfccca60000c4
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const highlight = (code) =>
    code
      .replace(/(F+)/g, '<span style="color: pink">$1</span>')
      .replace(/(L+)/g, '<span style="color: red">$1</span>')
      .replace(/(R+)/g, '<span style="color: green">$1</span>')
      .replace(/(\d+)/g, '<span style="color: orange">$1</span>')
  
