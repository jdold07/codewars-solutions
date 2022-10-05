# 6 kyu - Encrypt this!  [ ID: 5848565e273af816fb000449  (encrypt-this) ]
# URL: https://www.codewars.com/kata/5848565e273af816fb000449
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | REGULAR EXPRESSIONS | ARRAYS | CIPHERS | ALGORITHMS | CRYPTOGRAPHY | SECURITY
# ******************************************************************************
Test.assertEquals encryptThis("A"), "65"
Test.assertEquals encryptThis("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
Test.assertEquals encryptThis("The more he saw the less he spoke"), "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
Test.assertEquals encryptThis("The less he spoke the more he heard"), "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
Test.assertEquals(
  encryptThis "Why can we not all be like that wise old bird"
  "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
)
Test.assertEquals encryptThis("Thank you Piotr for all your help"), "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"

randomTexts = (count) ->
  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  maxIndex = possible.length - 1
  texts = []

  randomWord = ->
    rw = []
    i = 0
    while i < Math.max Math.floor(Math.random() * 20), 1
      rw.push possible[Math.floor Math.random() * maxIndex]
      i++
    rw.join ""

  t = 0
  while t < count
    result = []
    w = 0
    while w <= Math.floor Math.random() * 20
      result.push randomWord()
      w++
    texts.push result.join " "
    t++
  texts

x3c12c97a4c2711e98646d663bd873d93 = (text) ->
  if text == ""
    return text
  text
    .split " "
    .map (word) ->
      init = word.charCodeAt(0).toString()
      if word.length == 1
        return init
      chars = word.split ""
      length = chars.length
      temp = chars[1]
      chars[1] = chars[length - 1]
      chars[length - 1] = temp
      init + chars.slice(1, length).join ""
    .join " "

randomTexts(100).forEach (text) ->
  Test.assertEquals encryptThis(text), x3c12c97a4c2711e98646d663bd873d93 text
  return
