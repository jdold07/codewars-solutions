// 6 kyu - Mexican Wave  [ ID: 58f5c63f1e26ecda7e000029  (mexican-wave) ]
// URL: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
// Category: REFERENCE  |  Tags: ARRAYS | STRINGS | FUNDAMENTALS
// *****************************************************************************
function wave(str) {
  const mexicanWave = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      let temp = str.split("")
      temp[i] = temp[i].replace(temp[i], temp[i].toUpperCase())
      temp = temp.join("")
      mexicanWave.push(temp)
    }
  }
  return mexicanWave
}
