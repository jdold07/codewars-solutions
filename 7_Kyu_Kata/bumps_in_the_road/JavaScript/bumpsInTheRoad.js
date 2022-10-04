// 7 kyu - Bumps in the Road  [ ID: 57ed30dde7728215300005fa  (bumps-in-the-road) ]
// URL: https://www.codewars.com/kata/57ed30dde7728215300005fa
// Category: undefined  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
const bump = (x) => (x.replace(/[^n]/g, "").length > 15 ? "Car Dead" : "Woohoo!")
