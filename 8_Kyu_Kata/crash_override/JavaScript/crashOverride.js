// 8 kyu - Crash Override  [ ID: 578c1e2edaa01a9a02000b7f  (crash-override) ]
// URL: https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f
// Category: undefined  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const aliasGen = (f, l) =>
  /^[a-z]+/gi.test(f) && /^[a-z]+/gi.test(l)
    ? `${firstName[f[0].toUpperCase()]} ${surname[l[0].toUpperCase()]}`
    : "Your name must start with a letter from A - Z."
