# 7 kyu - Name That Number!  [ ID: 579ba41ce298a73aaa000255  (name-that-number) ]
# URL: https://www.codewars.com/kata/579ba41ce298a73aaa000255
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
from random import randint, shuffle

def solution(x):
    numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
    ten_mults = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    
    if x % 100 < 10:
        return numbers[x % 100]
    elif x % 100 < 20:
        return teens[(x % 100) - 10]
    else:
        if (x % 100) % 10 == 0:
            return ten_mults[(x // 10) % 10 - 2]
        else:
            return ten_mults[(x // 10) % 10 - 2] + ' ' + numbers[x % 10]



test.describe('Basic Tests')
test.assert_equals(name_that_number(1), 'one')
test.assert_equals(name_that_number(52), 'fifty two')
test.assert_equals(name_that_number(21), 'twenty one')
test.assert_equals(name_that_number(99), 'ninety nine')
test.assert_equals(name_that_number(0), 'zero')
test.assert_equals(name_that_number(53), 'fifty three')
test.assert_equals(name_that_number(23), 'twenty three')
test.assert_equals(name_that_number(76), 'seventy six')


test.describe('Random Tests')
lst = list(range(100))
shuffle(lst)
for n in lst:
    test.it(repr(n))
    test.assert_equals(name_that_number(n), solution(n))

