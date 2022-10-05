// [object Object] - L1: Bartender, drinks!  [ ID: 568dc014440f03b13900001d  (l1-bartender-drinks) ]
// URL: https://www.codewars.com/kata/568dc014440f03b13900001d
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
function getDrinkByProfession(param){
    switch (param.toLowerCase()) {
        case "Jabroni".toLowerCase():
          return "Patron Tequila"
        case "School Counselor".toLowerCase():
          return "Anything with Alcohol"
        case "Programmer".toLowerCase():
          return "Hipster Craft Beer"
        case "Bike Gang Member".toLowerCase():
          return "Moonshine"
        case "Politician".toLowerCase():
          return "Your tax dollars"
        case "Rapper".toLowerCase():
          return "Cristal"
        default:
          return "Beer"
    }
  }
