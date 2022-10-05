// [object Object] - The Office I - Outed  [ ID: 57ecf6efc7fe13eb070000e1  (the-office-i-outed) ]
// URL: https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
const outed = (meet, boss) => 
    [...Object.entries(meet)]
    .reduce((a,b) => a + (b[0] === boss ? 2 * b[1] : b[1]), 0) / Object.keys(meet).length <= 5 
    ? "Get Out Now!"
    : "Nice Work Champ!"
