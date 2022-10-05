# 8 kyu - get character from ASCII Value  [ ID: 55ad04714f0b468e8200001c  (get-character-from-ascii-value) ]
# URL: https://www.codewars.com/kata/55ad04714f0b468e8200001c
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
from random import randint

test.assert_equals(get_char(65), "A")
test.assert_equals(get_char(33), "!")
test.assert_equals(get_char(34), '"')
test.assert_equals(get_char(35), "#")
test.assert_equals(get_char(36), "$")
test.assert_equals(get_char(37), "%")
test.assert_equals(get_char(38), "&")

for i in range(32, 127):
    expected = chr(i)
    test.assert_equals(get_char(i), expected)

for i in range(100):
    random_value = randint(33, 256)
    expected = chr(random_value)
    test.assert_equals(get_char(random_value), expected)
