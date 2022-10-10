//+ ====================================================================================================================
//+
//+ 6 kyu - The Deaf Rats of Hamelin  [ ID: 598106cb34e205e074000031 ] (the-deaf-rats-of-hamelin)
//+ URL: https://www.codewars.com/kata/598106cb34e205e074000031
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ALGORITHMS | QUEUES | DATA STRUCTURES
//+
//+ ====================================================================================================================

const countDeafRats = (town) => {
  const sanitisedSplit = town.replace(/\s/g, "").split("P")

  const pairs = (array) => array.reduce((res, _, i) => (!(i % 2) ? [...res, array.slice(i, i + 2)] : res), [])
  const reduceToDeaf = (array, iRatHead) => array.reduce((a, b) => (b[iRatHead] === "O" ? a + 1 : a), 0)

  return town.trim()[0] === "P"
    ? reduceToDeaf(pairs([...sanitisedSplit.join("")]), 1)
    : town.trim()[town.trim().length - 1] === "P"
    ? reduceToDeaf(pairs([...sanitisedSplit.join("")]), 0)
    : reduceToDeaf(pairs([...sanitisedSplit[0]]), 0) + reduceToDeaf(pairs([...sanitisedSplit[1]]), 1)
}

module.exports = { countDeafRats }
