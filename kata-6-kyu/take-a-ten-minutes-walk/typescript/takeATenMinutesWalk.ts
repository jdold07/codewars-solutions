//+ ====================================================================================================================
//+
//+ 6 kyu - Take a Ten Minutes Walk  [ ID: 54da539698b8a2ad76000228 ] (take-a-ten-minutes-walk)
//+ URL: https://www.codewars.com/kata/54da539698b8a2ad76000228
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function isValidWalk(walk: string[]): boolean {
  if (walk.length !== 10) return false
  let xPos = 0
  let yPos = 0
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") yPos++
    if (walk[i] === "s") yPos--
    if (walk[i] === "e") xPos++
    if (walk[i] === "w") xPos--
  }
  return !xPos && !yPos
}

export { isValidWalk }
