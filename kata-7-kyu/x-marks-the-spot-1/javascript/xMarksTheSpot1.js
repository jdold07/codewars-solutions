//+ ====================================================================================================================
//+
//+ 7 kyu - 'x' marks the spot.  [ ID: 5777fe3f355edbf0a5000d11 ] (x-marks-the-spot-1)
//+ URL: https://www.codewars.com/kata/5777fe3f355edbf0a5000d11
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | MATRIX
//+
//+ ====================================================================================================================

const xMarksTheSpot = (input) => {
  const flatInput = input.flat()
  if (!flatInput.includes("x") || flatInput.indexOf("x") !== flatInput.lastIndexOf("x")) return []
  return input.reduce((a, c, i) => (c.includes("x") ? [i, c.indexOf("x")] : a), [])
}

module.exports = { xMarksTheSpot }
