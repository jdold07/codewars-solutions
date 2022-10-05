// [object Object] - Take a Ten Minutes Walk  [ ID: 54da539698b8a2ad76000228  (take-a-ten-minutes-walk) ]
// URL: https://www.codewars.com/kata/54da539698b8a2ad76000228
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
function isValidWalk(walk) {
      if (walk.length !== 10) return false
      let xPos = 0
      let yPos = 0
      for (let i = 0; i < walk.length; i++){
          switch (walk[i]) {
              case "n": yPos++; break
              case "s": yPos--; break
              case "e": xPos++; break
              case "w": xPos--; break
          }
      }
      if (xPos === 0 && yPos === 0) return true
      else return false
  }
