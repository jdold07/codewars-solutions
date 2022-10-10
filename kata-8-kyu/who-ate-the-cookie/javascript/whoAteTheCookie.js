//+ ====================================================================================================================
//+
//+ 8 kyu - Who ate the cookie?  [ ID: 55a996e0e8520afab9000055 ] (who-ate-the-cookie)
//+ URL: https://www.codewars.com/kata/55a996e0e8520afab9000055
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const cookie = (x) => {
  typeof x === "string" ? (x = "Zach") : typeof x === "number" ? (x = "Monica") : (x = "the dog")
  return `Who ate the last cookie? It was ${x}!`
}


module.exports = { cookie }
