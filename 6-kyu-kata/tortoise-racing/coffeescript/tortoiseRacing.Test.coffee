# 6 kyu - Tortoise racing  [ ID: 55e2adece53b4cdcb900006c  (tortoise-racing) ]
# URL: https://www.codewars.com/kata/55e2adece53b4cdcb900006c
# Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS | ALGORITHMS
# ******************************************************************************
Test.describe 'Tortoise Racing', ->
  Test.it 'Basic tests ', ->
    Test.assertSimilar race(720, 850, 70), [
      0
      32
      18
    ]
    Test.assertSimilar race(80, 91, 37), [
      3
      21
      49
    ]
    Test.assertSimilar race(80, 100, 40), [
      2
      0
      0
    ]
    Test.assertSimilar race(720, 850, 37), [
      0
      17
      4
    ]
    Test.assertSimilar race(720, 850, 370), [
      2
      50
      46
    ]
    Test.assertSimilar race(120, 850, 37), [
      0
      3
      2
    ]
    Test.assertSimilar race(820, 850, 550), [
      18
      20
      0
    ]
    Test.assertSimilar race(820, 81, 550), null
    return
  return
Test.describe 'Random tests', ->
  # --------------------

  randint = (a, b) ->
    Math.floor Math.random() * (b - a + 1) + a

  # --------------------

  sol1378 = (v1, v2, g) ->
    d = v2 - v1
    if d <= 0
      return null
    h = ~ ~(g / d)
    r = g % d
    mn = ~ ~(r * 60 / d)
    s = ~ ~(r * 60 % d * 60 / d)
    [
      h
      mn
      s
    ]

  _ = 0
  while _ < 25
    v1 = randint(50, 750)
    v2 = randint(v1 + 20, 850)
    g = randint(60, 150)
    Test.it 'Testing: ', ->
      Test.assertSimilar race(v1, v2, g), sol1378(v1, v2, g), 'It should work for random tests too'
      return
    _++
  return


