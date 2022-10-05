# 7 kyu - Drone Fly-By  [ ID: 58356a94f8358058f30004b5  (drone-fly-by) ]
# URL: https://www.codewars.com/kata/58356a94f8358058f30004b5
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
# ******************************************************************************
describe "Basic Tests", ->
  it "Testing for basic tests", ->
    Test.assertEquals(flyBy('xxxxxx', '====T'), 'ooooox');
    Test.assertEquals(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
    Test.assertEquals(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 
    
describe "Random Tests", ->
      
    sol = (lamps, drone) ->
      'o'.repeat(Math.min(drone.length, lamps.length)) + 'x'.repeat(Math.max(0, lamps.length - drone.length))
    
    randint = (min, max) -> Math.floor(Math.random() * (max - min + 1)) + min
    
    for i in [1..100]
      str1 = Array(randint(1, 30)).fill("x").join ""
      str2 = "#{Array(randint(0, str1.length)).fill("=").join ""}T"
      expected = sol(str1, str2)
      it "flyBy(#{JSON.stringify(str1)}, #{JSON.stringify(str2)}) should equal #{JSON.stringify(expected)}", ->
          Test.assertEquals(flyBy(str1, str2), expected) 
