// 7 kyu - V     A     P     O     R     C     O     D     E  [ ID: 5966eeb31b229e44eb00007a  (v-a-p-o-r-c-o-d-e) ]
// URL: https://www.codewars.com/kata/5966eeb31b229e44eb00007a
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const vaporcode = (string) => string.replace(/./g, (x) => (x === " " ? "" : `${x.toUpperCase()}  `)).trim()
  
