//+ ====================================================================================================================
//+
//+ 6 kyu - If you can read this...  [ ID: 586538146b56991861000293 ] (if-you-can-read-this-dot-dot-dot)
//+ URL: https://www.codewars.com/kata/586538146b56991861000293
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const NATO = {
  a: "Alfa",
  n: "November",
  b: "Bravo",
  o: "Oscar",
  c: "Charlie",
  p: "Papa",
  d: "Delta",
  q: "Quebec",
  e: "Echo",
  r: "Romeo",
  f: "Foxtrot",
  s: "Sierra",
  g: "Golf",
  t: "Tango",
  h: "Hotel",
  u: "Uniform",
  i: "India",
  v: "Victor",
  j: "Juliett",
  w: "Whiskey",
  k: "Kilo",
  x: "Xray",
  l: "Lima",
  y: "Yankee",
  m: "Mike",
  z: "Zulu"
}

const to_nato = (words) => {
  return words
    .split(" ")
    .join("")
    .split("")
    .map((el) => (el.toLowerCase() in NATO ? NATO[el.toLowerCase()] : el))
    .join(" ")
}

module.exports = { to_nato, NATO }

//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================
