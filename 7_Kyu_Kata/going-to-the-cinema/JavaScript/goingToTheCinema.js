// [object Object] - Going to the cinema  [ ID: 562f91ff6a8b77dfe900006e  (going-to-the-cinema) ]
// URL: https://www.codewars.com/kata/562f91ff6a8b77dfe900006e
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const movie = (card, ticket, perc, visits = 1) => {
    while (visits * ticket <= Math.ceil(card + ticket * perc ** visits)) {
      card += ticket * perc ** visits
      visits += 1
    }
    return visits
  }
  
  // Recursion - fails due to max call tack size
  const movieRecursion = (card, ticket, perc, visits = 1) =>
    visits * ticket > Math.ceil(card + ticket * perc ** visits)
      ? visits
      : movie(card + ticket * perc ** visits, ticket, perc, visits + 1)
