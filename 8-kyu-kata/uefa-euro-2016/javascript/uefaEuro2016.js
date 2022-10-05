// 8 kyu - UEFA EURO 2016  [ ID: 57613fb1033d766171000d60  (uefa-euro-2016) ]
// URL: https://www.codewars.com/kata/57613fb1033d766171000d60
// Category: REFERENCE  |  Tags: STRINGS | ARRAYS | FUNDAMENTALS
// *****************************************************************************
const uefaEuro2016 = (teams, scores) => 
    `At match ${teams[0]} - ${teams[1]}, ` + (!(scores[0]-scores[1]) ? "teams played draw." : `${teams[scores.indexOf(Math.max(...scores))]} won!`)
