# 8 kyu - Function 3 - multiplying two numbers  [ ID: 523b66342d0c301ae400003b  (function-3-multiplying-two-numbers) ]
# URL: https://www.codewars.com/kata/523b66342d0c301ae400003b
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
getRandom = ->
  Test.randomNumber() - Test.randomNumber()

describe 'Testing multiply', ->
  it 'Should be a function', ->
    Test.assertEquals typeof multiply, 'function', 'Is no function!'

  it 'Should return 10 multiplications correctly', ->
    i = 0
    while i < 10
      x = getRandom()
      y = getRandom()
      Test.assertEquals multiply(x, y), x * y, 'that\'s not the correct multiplication!'
      i++
