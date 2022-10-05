# [object Object] - shorter concat [reverse longer]  [ ID: 54557d61126a00423b000a45  (shorter-concat-reverse-longer) ]
# URL: https://www.codewars.com/kata/54557d61126a00423b000a45
# Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
Test.assertEquals shorter_reverse_longer("first", "abcde"), "abcdetsrifabcde"
Test.assertEquals shorter_reverse_longer("hello", "bau"), "bauollehbau"
Test.assertEquals shorter_reverse_longer("abcde", "fghi"), "fghiedcbafghi"

test_shorter_reverse_longer = (a,b) ->
  if(b.length > a.length) then a+b.split('').reverse().join('')+a else b+a.split('').reverse().join('')+b
  
random_string = () ->
  possible = "abcdefghijklmnopqrstuvwxyz"
  l = Math.floor(Math.random() * 10)
  text = (possible.charAt(Math.floor(Math.random() * possible.length)) for i in [0..l]).join('')
  
for [1..100]
  do () ->
    a = random_string()
    b = random_string()
    Test.assertEquals(test_shorter_reverse_longer(a,b), shorter_reverse_longer(a,b))
