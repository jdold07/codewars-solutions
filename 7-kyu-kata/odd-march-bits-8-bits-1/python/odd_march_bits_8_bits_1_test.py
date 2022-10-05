# 7 kyu - Odd March  Bits 8 bits  [ ID: 58ee4db3e479611e6f000086  (odd-march-bits-8-bits-1) ]
# URL: https://www.codewars.com/kata/58ee4db3e479611e6f000086
# Category: REFERENCE  |  Tags: BITS | BINARY | ARRAYS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import bit_march

import random


@test.describe("Tests")
def tests():
    @test.it("sample_tests")
    def sample_tests():
        test.assert_equals(bit_march(2), [
            [0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
        ])
        test.assert_equals(bit_march(3), [
            [0, 0, 0, 0, 0, 1, 1, 1, ],
            [0, 0, 0, 0, 1, 1, 1, 0, ],
            [0, 0, 0, 1, 1, 1, 0, 0, ],
            [0, 0, 1, 1, 1, 0, 0, 0, ],
            [0, 1, 1, 1, 0, 0, 0, 0, ],
            [1, 1, 1, 0, 0, 0, 0, 0, ],
        ])

        def solution(n: int) -> list:
            N = 8
            length = N - n + 1

            list_2D = []
            ones = (1 << n) - 1

            for i in range(0, length):
                list_2D.append([int(bit) for bit in format(ones, f'0{N}b')])
                ones <<= 1

            return list_2D

        @test.it('random tests')
        def random_tests():
            input = [i for i in range(1, 8 + 1)]
            random.shuffle(input)
            for n in input:
                expected = solution(n)
                actual = bit_march(n)

                test.assert_equals(actual, expected, allow_raise = True)

