// 6 kyu - Kingdoms Ep1: Jousting  [ ID: 6138ee916cb50f00227648d9  (kingdoms-ep1-jousting) ]
// URL: https://www.codewars.com/kata/6138ee916cb50f00227648d9
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
const joust = (listField, vKnightLeft, vKnightRight) => {
  while ((vKnightLeft || vKnightRight) && listField[0].indexOf(">") < listField[1].indexOf("<")) {
    listField[0] = !vKnightLeft ? listField[0] : " ".repeat(vKnightLeft) + listField[0].slice(0, -vKnightLeft)
    listField[1] = !vKnightRight ? listField[1] : listField[1].slice(vKnightRight) + " ".repeat(vKnightRight)
  }
  return listField
}
// *****************************************************************************
// *****************************************************************************
const joust = (listField, vKnightLeft, vKnightRight) => {
  if (!vKnightLeft && !vKnightRight) return listField
  while (listField[0].indexOf(">") < listField[1].indexOf("<")) {
    listField[0] = !vKnightLeft ? listField[0] : " ".repeat(vKnightLeft) + listField[0].slice(0, -vKnightLeft)
    listField[1] = !vKnightRight ? listField[1] : listField[1].slice(vKnightRight) + " ".repeat(vKnightRight)
  }
  return listField
}
