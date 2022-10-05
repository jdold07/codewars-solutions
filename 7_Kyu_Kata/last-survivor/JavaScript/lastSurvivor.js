// [object Object] - Last Survivor  [ ID: 609eee71109f860006c377d1  (last-survivor) ]
// URL: https://www.codewars.com/kata/609eee71109f860006c377d1
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
const lastSurvivor = (letters, coords) => coords.reduce((a, c) => [...a].filter((_, i) => i !== c), [...letters])[0]
