# [object Object] - Squash the bugs  [ ID: 56f173a35b91399a05000cb7  (squash-the-bugs) ]
# URL: https://www.codewars.com/kata/56f173a35b91399a05000cb7
# Category: BUG_FIXES  |  Tags: DEBUGGING | FUNDAMENTALS
# ******************************************************************************
Test.describe 'Basic tests', ->
  Test.assertEquals findLongest('The quick white fox jumped around the massive dog'), 7
  Test.assertEquals findLongest('Take me to tinseltown with you'), 10
  Test.assertEquals findLongest('Sausage chops'), 7
  Test.assertEquals findLongest('Wind your body and wiggle your belly'), 6
  Test.assertEquals findLongest('Lets all go on holiday'), 7

Test.describe 'Random tests', ->

  randint = (a, b) ->
    ~~(Math.random() * (b - a + 1)) + a

  sol = (s) ->
    Math.max.apply this, s.split(' ').map((a) ->
      a.length
    )

  names = [
    'Arsene'
    'Lupin'
    'III'
    'Daisuke'
    'Jigen'
    'Goemon'
    'Ishikawa'
    'Fujiko'
    'Mine'
    'Rebecca'
    'Rossellini'
    'Koichi'
    'Zenigata'
    'Justin'
    'Nix'
    'Person'
    'Leonardo'
    'Da'
    'Vinci'
  ]
  i = 0
  while i < 40
    s = []
    len = randint(1, 20)
    k = 0
    while k < len
      s.push names[randint(0, names.length - 1)]
      k++
    s = s.join(' ')
    Test.it "Testing for #{s}", ->
      Test.assertEquals findLongest(s), sol(s), 'It should work for random inputs too'
    i++
