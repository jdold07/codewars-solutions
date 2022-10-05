# [object Object] - Pascal's Triangle  [ ID: 5226eb40316b56c8d500030f  (pascals-triangle) ]
# URL: https://www.codewars.com/kata/5226eb40316b56c8d500030f
# Category: ALGORITHMS  |  Tags: ARRAYS | MATHEMATICS | ALGORITHMS
# ******************************************************************************
test.describe("Basic tests")
test.it("Should pass basic tests")
test.assert_equals(pascals_triangle(1), [1],"1 level triangle incorrect");
test.assert_equals(pascals_triangle(2), [1,1,1],"2 level triangle incorrect");
test.assert_equals(pascals_triangle(4), [1,1,1,1,2,1,1,3,3,1],"4 level triangle incorrect");
test.assert_equals(pascals_triangle(6), [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1,1,5,10,10,5,1],"6 level triangle incorrect");
test.assert_equals(pascals_triangle(10), [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1,1,5,10,10,5,1,1,6,15,20,15,6,1,1,7,21,35,35,21,7,1,1,8,28,56,70,56,28,8,1,1,9,36,84,126,126,84,36,9,1],"10 level triangle incorrect");
test.assert_equals(pascals_triangle(20), [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1,1,5,10,10,5,1,1,6,15,20,15,6,1,1,7,21,35,35,21,7,1,1,8,28,56,70,56,28,8,1,1,9,36,84,126,126,84,36,9,1,1,10,45,120,210,252,210,120,45,10,1,1,11,55,165,330,462,462,330,165,55,11,1,1,12,66,220,495,792,924,792,495,220,66,12,1,1,13,78,286,715,1287,1716,1716,1287,715,286,78,13,1,1,14,91,364,1001,2002,3003,3432,3003,2002,1001,364,91,14,1,1,15,105,455,1365,3003,5005,6435,6435,5005,3003,1365,455,105,15,1,1,16,120,560,1820,4368,8008,11440,12870,11440,8008,4368,1820,560,120,16,1,1,17,136,680,2380,6188,12376,19448,24310,24310,19448,12376,6188,2380,680,136,17,1,1,18,153,816,3060,8568,18564,31824,43758,48620,43758,31824,18564,8568,3060,816,153,18,1,1,19,171,969,3876,11628,27132,50388,75582,92378,92378,75582,50388,27132,11628,3876,969,171,19,1],"20 level triangle incorrect");
test.assert_equals(pascals_triangle(25), [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1,1,5,10,10,5,1,1,6,15,20,15,6,1,1,7,21,35,35,21,7,1,1,8,28,56,70,56,28,8,1,1,9,36,84,126,126,84,36,9,1,1,10,45,120,210,252,210,120,45,10,1,1,11,55,165,330,462,462,330,165,55,11,1,1,12,66,220,495,792,924,792,495,220,66,12,1,1,13,78,286,715,1287,1716,1716,1287,715,286,78,13,1,1,14,91,364,1001,2002,3003,3432,3003,2002,1001,364,91,14,1,1,15,105,455,1365,3003,5005,6435,6435,5005,3003,1365,455,105,15,1,1,16,120,560,1820,4368,8008,11440,12870,11440,8008,4368,1820,560,120,16,1,1,17,136,680,2380,6188,12376,19448,24310,24310,19448,12376,6188,2380,680,136,17,1,1,18,153,816,3060,8568,18564,31824,43758,48620,43758,31824,18564,8568,3060,816,153,18,1,1,19,171,969,3876,11628,27132,50388,75582,92378,92378,75582,50388,27132,11628,3876,969,171,19,1,1,20,190,1140,4845,15504,38760,77520,125970,167960,184756,167960,125970,77520,38760,15504,4845,1140,190,20,1,1,21,210,1330,5985,20349,54264,116280,203490,293930,352716,352716,293930,203490,116280,54264,20349,5985,1330,210,21,1,1,22,231,1540,7315,26334,74613,170544,319770,497420,646646,705432,646646,497420,319770,170544,74613,26334,7315,1540,231,22,1,1,23,253,1771,8855,33649,100947,245157,490314,817190,1144066,1352078,1352078,1144066,817190,490314,245157,100947,33649,8855,1771,253,23,1,1,24,276,2024,10626,42504,134596,346104,735471,1307504,1961256,2496144,2704156,2496144,1961256,1307504,735471,346104,134596,42504,10626,2024,276,24,1],"25 level triangle incorrect");
print("<COMPLETEDIN::>")
print("<COMPLETEDIN::>")

test.describe("Random tests")
test.it("Should pass random tests too")
def random_tests():
    from random import randint
    
    # Reference solution
    def pascals_triangle_sol(n):
        triangle = []
        previous_row = []
        for x in range(n):
            current_row = [1] + [sum(previous_row[i:i+2]) for i in range(x)]
            triangle.extend(current_row)
            previous_row = current_row
        return triangle

    for n in range(1, 11):
        expected = pascals_triangle_sol(n)
        test.assert_equals(pascals_triangle(n), expected, str(n) + " level triangle incorrect")
    
    for _ in range(100):
        n = randint(26, 125)
        expected = pascals_triangle_sol(n)
        test.expect(pascals_triangle(n) == expected, str(n) + " level triangle incorrect")
        
random_tests()        
