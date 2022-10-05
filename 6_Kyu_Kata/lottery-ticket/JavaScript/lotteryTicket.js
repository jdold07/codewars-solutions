// [object Object] - Lottery Ticket  [ ID: 57f625992f4d53c24200070e  (lottery-ticket) ]
// URL: https://www.codewars.com/kata/57f625992f4d53c24200070e
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
// *****************************************************************************
const bingo = (ticket, win) =>
    ticket.reduce((a, [s, n]) => a + [...s].some((v) => v.charCodeAt() === n), 0) >= win ? "Winner!" : "Loser!"
// *****************************************************************************
// *****************************************************************************
const bingo = (ticket, win) => ticket
    .map(([s, n]) => !!s.replace(/./g, (v) => v.charCodeAt() === n || "").length)
    .reduce((a, c) => a + c) >= win ? "Winner!" : "Loser!"

