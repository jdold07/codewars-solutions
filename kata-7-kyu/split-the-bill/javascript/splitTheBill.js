//+ ====================================================================================================================
//+
//+ 7 kyu - Split The Bill  [ ID: 5641275f07335295f10000d0 ] (split-the-bill)
//+ URL: https://www.codewars.com/kata/5641275f07335295f10000d0
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING | DATA STRUCTURES
//+
//+ ====================================================================================================================

const splitTheBill = (x) => {
  const xArray = [...Object.entries(x)]
  const shareAmount = xArray.reduce((a, [, v]) => a + v, 0) / xArray.length
  return xArray.reduce((a, [k, v]) => ((a[k] = Math.round((v - shareAmount) * 100) / 100), a), {})
}

module.exports = { splitTheBill }
