# [object Object] - Drying Potatoes  [ ID: 58ce8725c835848ad6000007  (drying-potatoes) ]
# URL: https://www.codewars.com/kata/58ce8725c835848ad6000007
# Category: REFERENCE  |  Tags: FUNDAMENTALS | PUZZLES
# ******************************************************************************
def dotest(p0, w0, p1, exp):
    if (potatoes(p0, w0, p1) == exp):
        print("GOOD")
    else:
        print("BAD")
    test.assert_equals(potatoes(p0, w0, p1), exp)

def dotest(p0, w0, p1, exp):
    test.assert_equals(potatoes(p0, w0, p1), exp)

test.describe("potatoes")
test.it("Basic tests")
dotest(82, 127, 80, 114)
dotest(93, 129, 91, 100)
dotest(82, 134, 77, 104)
dotest(90, 194, 87, 149)
dotest(82, 173, 77, 135)
dotest(77, 227, 74, 200)
dotest(76, 64, 75, 61)
dotest(81, 120, 79, 108)
dotest(84, 65, 80, 52)
dotest(93, 69, 89, 43)
dotest(78, 121, 75, 106)
dotest(83, 185, 79, 149)
dotest(78, 57, 76, 52)
dotest(79, 132, 78, 126)
dotest(86, 195, 84, 170)
dotest(75, 96, 70, 80)
dotest(81, 150, 77, 123)
dotest(82, 57, 81, 54)
dotest(85, 58, 83, 51)
dotest(78, 173, 77, 165)

from random import randint

def potatoesNUD(p0, w0, p1):
    return int(w0 * (100.0 - p0) / (100.0 - p1))
    
def random_tests():
    i = 0
    while (i < 50):
        p0 = randint(75,99)
        w0 = randint(50,250)
        p1 = p0 - randint(1,5)
        dotest(p0, w0, p1, potatoesNUD(p0, w0, p1))
        i += 1

test.it("Random tests")
random_tests()


