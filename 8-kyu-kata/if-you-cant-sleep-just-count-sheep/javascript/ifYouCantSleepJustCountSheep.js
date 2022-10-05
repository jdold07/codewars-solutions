// 8 kyu - If you can't sleep, just count sheep!!  [ ID: 5b077ebdaf15be5c7f000077  (if-you-cant-sleep-just-count-sheep) ]
// URL: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
var countSheep = function (num){
    let sheep = ""
    for (let i = 1; i <= num; i++){
      sheep += `${i} sheep...`
    }
    return sheep
  }
