# 6 kyu - Rectangle into Squares  [ ID: 55466989aeecab5aac00003e  (rectangle-into-squares) ]
# URL: https://www.codewars.com/kata/55466989aeecab5aac00003e
# Category: GAMES  |  Tags: FUNDAMENTALS | GEOMETRY | PUZZLES
# ******************************************************************************
try:
    from solution import sq_in_rect
except:
    from solution import sqInRect as sq_in_rect
import codewars_test as test
from random import randint


@test.describe("Tests...")
def _():

    @test.it("Basic Tests")
    def _():
        test.assert_equals(sq_in_rect(5, 5), None)
        test.assert_equals(sq_in_rect(5, 3), [3, 2, 1, 1])
        test.assert_equals(sq_in_rect(3, 5), [3, 2, 1, 1])
        test.assert_equals(sq_in_rect(20, 14), [14, 6, 6, 2, 2, 2])
        test.assert_equals(sq_in_rect(14, 20), [14, 6, 6, 2, 2, 2])
        test.assert_equals(sq_in_rect(240, 32), [32, 32, 32, 32, 32, 32, 32, 16, 16])
        test.assert_equals(sq_in_rect(6250, 250), [250] * 25)
        test.assert_equals(sq_in_rect(625, 230), [230, 230, 165, 65, 65, 35, 30, 5, 5, 5, 5, 5, 5])
        test.assert_equals(sq_in_rect(731, 230), [230, 230, 230, 41, 41, 41, 41, 41, 25, 16, 9, 7, 2, 2, 2, 1, 1])
        test.assert_equals(sq_in_rect(37, 14), [14, 14, 9, 5, 4, 1, 1, 1, 1])

    def sq_in_rectTest(lng, wdth):
        if lng == wdth:
            return None
        if lng < wdth:
            wdth, lng = lng, wdth
        res = []
        while lng != wdth:
            res.append(wdth)
            lng = lng - wdth
            if lng < wdth:
                wdth, lng = lng, wdth
        res.append(wdth)
        return res
    
    
    @test.describe("Random Tests")
    def randomTests():
        someLengths = [55,89,144,233,377,610,987,1597,2584,418,
                       676,41,99,56,78,907,561,453,32,12,
                       24,13,59,90,21,66,77,88,62,11
                      ]
        someWidths = [22,75,121,340,52,78,157,88,55,102,
                      120,73,37,44,565,1002,43,90,72,10,
                      24,13,59,32,34,51,12,68,34,100
                     ]
        for x in range(0, 20):
            rn = randint(0, 29)
            f1 = someLengths[rn]; 
            f2 = someWidths[rn];
            test.it(f"Random Tests: sq_in_rect({f1}, {f2})")
            test.assert_equals(sq_in_rect(f1, f2), sq_in_rectTest(f1, f2))

    
