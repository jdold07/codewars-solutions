//+ ====================================================================================================================
//+
//+ 7 kyu - All Inclusive?  [ ID: 5700c9acc1555755be00027e ] (all-inclusive)
//+ URL: https://www.codewars.com/kata/5700c9acc1555755be00027e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

const containAllRots = ([...strng], arr) => {
  for (let i = 0; i < strng.length; i++) {
    if (!arr.includes(strng.join(""))) return false
    strng.push(strng.shift())
  }
  return true
}

module.exports = { containAllRots }
