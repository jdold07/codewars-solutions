// 6 kyu - Word a10n (abbreviation)  [ ID: 5375f921003bf62192000746  (word-a10n-abbreviation) ]
// URL: https://www.codewars.com/kata/5375f921003bf62192000746
// Category: undefined  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const abbreviate = (s) => s.replace(/(\w)\w{2,}(\w)/g, (v, $1, $2) => $1 + (v.length - 2) + $2)
