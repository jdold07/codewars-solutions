//+ ====================================================================================================================
//+
//+ 6 kyu - The Supermarket Queue  [ ID: 57b06f90e298a7b53d000a86 ] (the-supermarket-queue)
//+ URL: https://www.codewars.com/kata/57b06f90e298a7b53d000a86
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function queueTime(customers, n) {
  const tills = Array(n).fill(0)
  for (let q of customers) {
    tills[tills.indexOf(Math.min(...tills))] += q
  }
  return Math.max(...tills)
}

module.exports = { queueTime }
