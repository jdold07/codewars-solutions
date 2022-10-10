//+ ====================================================================================================================
//+
//+ 8 kyu - Crash Override  [ ID: 578c1e2edaa01a9a02000b7f ] (crash-override)
//+ URL: https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const aliasGen = (f, l) =>
  /^[a-z]+/i.test(f) && /^[a-z]+/i.test(l)
    ? `${firstName[f[0].toUpperCase()]} ${surname[l[0].toUpperCase()]}`
    : "Your name must start with a letter from A - Z."

//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

const firstName = {
  A: "Alpha",
  B: "Beta",
  C: "Cache",
  D: "Data",
  E: "Energy",
  F: "Function",
  G: "Glitch",
  H: "Half-life",
  I: "Ice",
  J: "Java",
  K: "Keystroke",
  L: "Logic",
  M: "Malware",
  N: "Nagware",
  O: "OS",
  P: "Phishing",
  Q: "Quantum",
  R: "RAD",
  S: "Strike",
  T: "Trojan",
  U: "Ultraviolet",
  V: "Vanilla",
  W: "WiFi",
  X: "Xerox",
  Y: "Y",
  Z: "Zero"
}
const surname = {
  A: "Analogue",
  B: "Bomb",
  C: "Catalyst",
  D: "Discharge",
  E: "Electron",
  F: "Faraday",
  G: "Gig",
  H: "Hacker",
  I: "IP",
  J: "Jabber",
  K: "Killer",
  L: "Lazer",
  M: "Mike",
  N: "n00b",
  O: "Overclock",
  P: "Payload",
  Q: "Quark",
  R: "Roy",
  S: "Spy",
  T: "T-Rex",
  U: "Unit",
  V: "Virus",
  W: "Worm",
  X: "X",
  Y: "Yob",
  Z: "Zombie"
}

//+ ====================================================================================================================
//+ ====================================================================================================================

module.exports = { aliasGen, firstName, surname }
