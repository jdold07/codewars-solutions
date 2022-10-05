# 7 kyu - Thinkful - String Drills: Repeater  [ ID: 585a1a227cb58d8d740001c3  (thinkful-string-drills-repeater) ]
# URL: https://www.codewars.com/kata/585a1a227cb58d8d740001c3
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
Test.describe "Basic Tests", ->
  Test.assertEquals repeater("a", 5), "aaaaa"
  Test.assertEquals repeater("Na", 16), "NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa"
  Test.assertEquals repeater("Wub ", 6), "Wub Wub Wub Wub Wub Wub "

myrepeater = (string, n) ->
  return string.repeat n

Test.describe "More Tests", ->
  Test.assertEquals repeater("la", 12), myrepeater "la", 12
  Test.assertEquals repeater("dance\n", 3), myrepeater "dance\n", 3
  Test.assertEquals(
    repeater "A stopped clock is right twice a day. ", 2
    myrepeater "A stopped clock is right twice a day. ", 2
  )
  Test.assertEquals repeater("nine", 9), myrepeater "nine", 9

Test.describe "Random Tests", ->
  words = "This is an array of random String".split " "
  for i in [0..100]
    word = words[Math.floor Math.random() * words.length]
    n = Math.floor Math.random() * (10 - 1) + 1
    Test.assertEquals repeater(word, n), myrepeater word, n
