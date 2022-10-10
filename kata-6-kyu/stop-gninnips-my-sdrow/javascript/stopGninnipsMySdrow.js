//+ ====================================================================================================================
//+
//+ 6 kyu - Stop gninnipS My sdroW!  [ ID: 5264d2b162488dc400000001 ] (stop-gninnips-my-sdrow)
//+ URL: https://www.codewars.com/kata/5264d2b162488dc400000001
//+ Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

function spinWords(string) {
  string = string.split(" ")
  for (let i = 0; i < string.length; i++) {
    if (string[i].length > 4) string[i] = string[i].split("").reverse().join("")
  }
  return string.join(" ")
}

module.exports = { spinWords }
