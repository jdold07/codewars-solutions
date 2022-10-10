#+ =====================================================================================================================
#+
#+ 8 kyu - Thinkful - Number Drills: Pixelart planning  [ ID: 58630e2ae88af44d2b0000ea ] (thinkful-number-drills-pixelart-planning)
#+ URL: https://www.codewars.com/kata/58630e2ae88af44d2b0000ea
#+ Category: REFERENCE  |  Tags: FUNDAMENTALS
#+
#+ =====================================================================================================================

import codewars_test as test
from thinkful_number_drills_pixelart_planning import is_divisible


test.describe("Basic tests")
test.assert_equals(is_divisible(4050, 27), True)
test.assert_equals(is_divisible(4066, 27), False)
test.assert_equals(is_divisible(10000, 20), True)
test.assert_equals(is_divisible(10005, 20), False)

test.describe("Random tests")

import random

def my_is_divisible(wall_length, pixel_size):
    return wall_length % pixel_size == 0
    
for x in range(150):
    wall_length = random.randint(500, 11000)
    pixel_size = random.randint(2, 29)
    test.assert_equals(
        is_divisible(wall_length, pixel_size),
        my_is_divisible(wall_length, pixel_size)
    ) 
