// 6 kyu - Simple Encryption #1 - Alternating Split  [ ID: 57814d79a56c88e3e0000786  (simple-encryption-number-1-alternating-split) ]
// URL: https://www.codewars.com/kata/57814d79a56c88e3e0000786
// Category: REFERENCE  |  Tags: CRYPTOGRAPHY | ALGORITHMS | STRINGS | ARRAYS | FUNDAMENTALS
// *****************************************************************************
function encrypt(text, n) {
  if (text === null) return null
  while (n > 0) {
    let odd = []
    let even = []
    for (let i = 0; i < text.length; i += 2) {
      even.push(text[i])
    }
    for (let j = 1; j < text.length; j += 2) {
      odd.push(text[j])
    }
    text = odd.join("") + even.join("")
    n--
  }
  return text
}

function decrypt(encryptedText, n) {
  if (encryptedText === null) return null
  while (n > 0) {
    let arr = []
    let odd = encryptedText.slice(0, Math.floor(encryptedText.length / 2)).split("")
    let even = encryptedText.slice(Math.floor(encryptedText.length / 2)).split("")
    for (let i = 0; i < even.length; i++) {
      arr.push(even[i])
      arr.push(odd[i])
    }
    encryptedText = arr.join("")
    n--
  }
  return encryptedText
}
