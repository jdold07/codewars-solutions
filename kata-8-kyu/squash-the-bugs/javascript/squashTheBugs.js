//+ ====================================================================================================================
//+
//+ 8 kyu - Squash the bugs  [ ID: 56f173a35b91399a05000cb7 ] (squash-the-bugs)
//+ URL: https://www.codewars.com/kata/56f173a35b91399a05000cb7
//+ Category: BUG_FIXES  |  Tags: DEBUGGING | FUNDAMENTALS
//+
//+ ====================================================================================================================

const findLongest = (str) => Math.max(...str.split(" ").map((el) => el.length))

// =====================================================================================================================
// =====================================================================================================================

function findLongest2(str) {
  const spl = str.split(" ")
  let longest = 0
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) longest = spl[i].length
  }
  return longest
}

module.exports = { findLongest, findLongest2 }
