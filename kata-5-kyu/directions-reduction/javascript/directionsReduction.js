//+ ====================================================================================================================
//+
//+ 5 kyu - Directions Reduction  [ ID: 550f22f4d758534c1100025a ] (directions-reduction)
//+ URL: https://www.codewars.com/kata/550f22f4d758534c1100025a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function dirReduc(arr) {
  arr = arr.join(" ")
  while (/NORTH\s*SOUTH|SOUTH\s*NORTH|EAST\s*WEST|WEST\s*EAST/.test(arr)) {
    arr = arr.replace(/NORTH\s*SOUTH|SOUTH\s*NORTH|EAST\s*WEST|WEST\s*EAST/g, "")
  }
  return arr
    .trim()
    .split(" ")
    .filter((el) => el !== "")
}

module.exports = { dirReduc }
