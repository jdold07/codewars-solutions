//+ ====================================================================================================================
//+
//+ 7 kyu - Get the Middle Character  [ ID: 56747fd5cb988479af000028 ] (get-the-middle-character)
//+ URL: https://www.codewars.com/kata/56747fd5cb988479af000028
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

function getMiddle(s: string) {
  const middle = Math.floor(s.length / 2)
  return s.length % 2 ? s.slice(middle, middle + 1) : s.slice(middle - 1, middle + 1)
}

export { getMiddle }
