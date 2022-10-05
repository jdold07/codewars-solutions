# 6 kyu - Prefill an Array  [ ID: 54129112fb7c188740000162  (prefill-an-array) ]
# URL: https://www.codewars.com/kata/54129112fb7c188740000162
# Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
# ******************************************************************************
def p(n,v=None):
    try:
        if type(n)==str: n=int(n)
    except:
        raise TypeError(str(n)+' is invalid')
    if type(n)!=int: raise TypeError(str(n)+' is invalid')
    return [v for i in range(n)]

from random import randint

test.describe("Testing the prefill function")

test.it("Should work with n as number greater than 0")
for i in range(3):
    rand = randint(1,25)
    test.assert_equals(prefill(rand, rand-1), p(rand,rand-1))
  
test.it("should work with n as numeric string")
for i in range(3):
    rand = randint(1,25)
    test.assert_equals(prefill(str(rand), rand-1), p(str(rand),rand-1))
  
test.it("should work with n as 0")
test.assert_equals(prefill(0), p(0), "failed with number 0")
test.assert_equals(prefill("0"), p("0"), "failed with string 0")
  
test.it("should work with v as object")
o={}
o["abcdefghijklmnopqrstuvwxyz"[randint(0,25)]]="abcdefghijklmnopqrstuvwxyz"[randint(0,25)]
test.assert_equals(prefill(3,o), p(3,o))
  
test.it("should work with v recursively")
a,b,c=randint(1,6),randint(1,6),"abcdefghijklmnopqrstuvwxyz"[randint(0,25)]
test.assert_equals(prefill(a, prefill(b, c)), p(a, p(b, c)))
  
test.it("should work with v as an unevaluated function")
a=randint(1,6)
test.assert_equals(prefill(a, str), p(a, str))

def testError(n, v):
    try:
      prefill(n,v)
    except TypeError as err:
      test.assert_equals(str(err), str(n)+" is invalid")
  

test.it("should throw errors with n as a float")
testError(randint(1,6)/10.0, {})
  
test.it("should throw errors with negative n")
testError(-randint(1,6), {})

test.it("should throw errors with n as a float string")
testError(str(randint(1,6)/10.0), {})

test.it("should throw an error with n as non-numeric formatted string")
testError("abcdefghijklmnopqrstuvwxyz"[randint(0,25)], {})

test.it("should throw an error with n as None")
testError(None, {})

test.it("should throw an error with n as boolean")
testError(True, {})
testError(False, {})
