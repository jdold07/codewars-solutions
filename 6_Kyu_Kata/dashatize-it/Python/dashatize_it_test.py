# [object Object] - Dashatize it  [ ID: 58223370aef9fc03fd000071  (dashatize-it) ]
# URL: https://www.codewars.com/kata/58223370aef9fc03fd000071
# Category: REFERENCE  |  Tags: STRINGS | ARRAYS | REGULAR EXPRESSIONS | FUNDAMENTALS
# ******************************************************************************
from random import randint
import re

# You can use Test.describe and Test.it to write BDD style test groupings
test.describe('Basic')
test.assert_equals(dashatize(274),"2-7-4", "Should return 2-7-4")
test.assert_equals(dashatize(5311),"5-3-1-1", "Should return 5-3-1-1")
test.assert_equals(dashatize(86320),"86-3-20", "Should return 86-3-20")
test.assert_equals(dashatize(974302),"9-7-4-3-02", "Should return 9-7-4-3-02")
test.describe('Weird')
test.assert_equals(dashatize(None),"None", "Should return None");
test.assert_equals(dashatize(0),"0", "Should return 0");
test.assert_equals(dashatize(-1),"1", "Should return 1");
test.assert_equals(dashatize(-28369),"28-3-6-9", "Should return 28-3-6-9");
test.describe('Random')
def mySolution(num):
    p = re.compile(r"([13579])")
    return p.sub('-\\1-',str(num)).replace('--','-').strip('-')
for j in range(100):
    input = randint(0,999999999)
    test.assert_equals(dashatize(input), mySolution(input))

