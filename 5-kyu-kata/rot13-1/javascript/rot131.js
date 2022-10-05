// 5 kyu - Rot13  [ ID: 530e15517bc88ac656000716  (rot13-1) ]
// URL: https://www.codewars.com/kata/530e15517bc88ac656000716
// Category: REFERENCE  |  Tags: CIPHERS | FUNDAMENTALS
// *****************************************************************************
function rot13(message) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  const cypher = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
  let result = ""
  for (i in message) {
    alphabet.indexOf(message[i]) == -1 ? (result += message[i]) : (result += cypher[alphabet.indexOf(message[i])])
  }
  return result
}
