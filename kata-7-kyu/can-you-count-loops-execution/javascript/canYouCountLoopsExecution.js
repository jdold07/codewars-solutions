//+ ====================================================================================================================
//+
//+ 7 kyu - Can you count loop's execution?  [ ID: 633bbba75882f6004f9dae4c ] (can-you-count-loops-execution)
//+ URL: https://www.codewars.com/kata/633bbba75882f6004f9dae4c
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

function countLoopIterations(arr) {
  return arr
    .map(([x, y]) => x + 1n + BigInt(y))
    .map((x, i, a) => {
      while (i > 0) {
        x *= a[i - 1] - 1n
        i--
      }
      return x
    })
}

//+ ====================================================================================================================
//+ ====================================================================================================================

// This was actual my last version, but submitted the previous as this seemed slower than mapping twice
function countLoopIterations3(arr) {
  return arr.map(([x, y], i, a) => {
    x += 1n + BigInt(y)
    while (i > 0) {
      x *= a[i - 1][0] + BigInt(a[i - 1][1])
      i--
    }
    return x
  })
}

//+ ====================================================================================================================
//+ ====================================================================================================================

/**This was kind of the starting point, then realising I didn't really need the second value, as it will always be
 * 1 less than the total "iterations" (x in my case).  So I changed mapping to only include the x value.
 * Looking at it further, I tried to combine what I needed in a single mapping, which works, but it seems using
 * BigInt twice was slower than mapping twice.  In the end, I submitted the twice mapped version at the top. */
function countLoopIterations2(arr) {
  return arr
    .map(([x, y]) => [x + 1n + BigInt(y), x + BigInt(y)])
    .map(([x], i, a) => {
      while (i > 0) {
        x *= a[i - 1][1]
        i--
      }
      return x
    })
}

module.exports = { countLoopIterations, countLoopIterations2, countLoopIterations3 }
