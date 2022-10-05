# 7 kyu - Case Swapping  [ ID: 5590961e6620c0825000008f  (case-swapping) ]
# URL: https://www.codewars.com/kata/5590961e6620c0825000008f
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
Test.describe 'Basic tests', ->
  Test.assertEquals swap('HelloWorld'), 'hELLOwORLD'
  Test.assertEquals swap('CodeWars'), 'cODEwARS'
  Test.assertEquals swap('ThIs iS A l0NG sENTence witH nUMbERs in IT 123 456'), 'tHiS Is a L0ng SentENCE WITh NumBerS IN it 123 456'
  Test.assertEquals swap(''), ''
  Test.assertEquals swap(' '), ' '
  Test.assertEquals swap('H_E_l-l_0 WO|||Rld'), 'h_e_L-L_0 wo|||rLD'
  Test.assertEquals swap('TeSt'), 'tEsT'
  Test.assertEquals swap('EeEEeeEEEeee'), 'eEeeEEeeeEEE'

Test.describe 'Random tests', ->

  randint = (a, b) ->
    Math.floor(Math.random() * (b - a + 1)) + a

  sol = (str1) ->
    res = []
    str = str1.split('')
    i = 0
    while i < str.length
      if str[i] == str[i].toUpperCase()
        res.push str[i].toLowerCase()
      else
        res.push str[i].toUpperCase()
      i++
    res.join ''

  base = 'abcdefghijklmnopqrstuvwxyz 0123456789 ,._-'
  _ = 0
  while _ < 40
    s = []
    len = randint(1, 50)
    j = 0
    while j < len
      s.push if randint(0, 1) == 1 then base[randint(0, base.length - 1)].toUpperCase() else base[randint(0, base.length - 1)]
      j++
    s = s.join('')
    Test.it 'Testing for ' + s, ->
      Test.assertEquals swap(s), sol(s), 'It should work for random inputs too'
    _++
