//+ ====================================================================================================================
//+
//+ 6 kyu - Counting Duplicates  [ ID: 54bf1c2cd5b56cc47f0007a1 ] (counting-duplicates)
//+ URL: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function duplicateCount(text) {
  let duplicateStr = ""
  text = text.toLowerCase()
  for (let i = 0; i < text.length; i++) {
    if (text.indexOf(text[i]) !== text.lastIndexOf(text[i])) {
      if (!duplicateStr.includes(text[i])) {
        duplicateStr += text[i]
        text.replace(text[i], "")
      } else text.replace(text[i], "")
    }
  }
  return duplicateStr.length
}

module.exports = { duplicateCount }
