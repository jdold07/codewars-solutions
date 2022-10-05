# [object Object] - Kebabize  [ ID: 57f8ff867a28db569e000c4a  (kebabize) ]
# URL: https://www.codewars.com/kata/57f8ff867a28db569e000c4a
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | REGULAR EXPRESSIONS
# ******************************************************************************
test.describe("Basic tests")
test.assert_equals(kebabize('myCamelCasedString'), 'my-camel-cased-string')
test.assert_equals(kebabize('myCamelHas3Humps'), 'my-camel-has-humps')
test.assert_equals(kebabize('SOS'), 's-o-s')
test.assert_equals(kebabize('42'), '')
test.assert_equals(kebabize('CodeWars'), 'code-wars')

test.describe("Random tests")
from random import randint
from re import sub
sol=lambda s: sub("^-+", "", sub("[A-Z]", lambda a: "-"+a.group(0).lower(),"".join([l for l in s if l.isalpha()])))
base="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for _ in range(40):
    s="".join(base[randint(0,len(base)-1)] for q in range(randint(1,45)))
    test.it("Testing for "+repr(s))
    test.assert_equals(kebabize(s), sol(s), "It should work for random inputs too")
