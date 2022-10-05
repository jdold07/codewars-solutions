# 6 kyu - Function Composition  [ ID: 5421c6a2dda52688f6000af8  (function-composition) ]
# URL: https://www.codewars.com/kata/5421c6a2dda52688f6000af8
# Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING | FUNDAMENTALS
# ******************************************************************************
add1 = lambda a: a+1
min1 = lambda a: a-1
div2 = lambda a: a/2
add15 = lambda a: a+15
this   = lambda a: a
total = lambda *args: sum(args)

test.expect( compose(add1,this)(0) == 1 )
test.expect( compose(add1,div2)(2) == 2, "Order should be as specified!" )
test.expect( compose(add1,total)(1,2,3,4,5) == 16, "Functions may be called with many arguments.")

test.expect( compose(add15,this)(0) == 15 )
test.expect( compose(this,add15)(0) == 15 )
