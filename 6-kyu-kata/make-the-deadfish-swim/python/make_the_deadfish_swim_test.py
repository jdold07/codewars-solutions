# 6 kyu - Make the Deadfish Swim  [ ID: 51e0007c1f9378fa810002a9  (make-the-deadfish-swim) ]
# URL: https://www.codewars.com/kata/51e0007c1f9378fa810002a9
# Category: ALGORITHMS  |  Tags: PARSING | ALGORITHMS
# ******************************************************************************
import codewars_test as test
from make_the_deadfish_swim import parse


@test.describe("Fixed tests")
def fixed_tests():
    @test.it("Sample tests")
    def tests():
        test.assert_equals(parse("ooo"), [0, 0, 0])
        test.assert_equals(parse("ioioio"), [1, 2, 3])
        test.assert_equals(parse("idoiido"), [0, 1])
        test.assert_equals(parse("isoisoiso"), [1, 4, 25])
        test.assert_equals(parse("codewars"), [0])


@test.describe("Random tests")
def random_tests():
    import random

    def _solution(data):
        r, v = [], 0
        for x in data:
            if x == "i":
                v += 1
            elif x == "d":
                v -= 1
            elif x == "s":
                v = v**2
            elif x == "o":
                r.append(v)
        return r

    for _ in range(100):
        code = "".join(
            random.choice("abcddddddddddefghiiiiiiiiiijklmnoooooooooopqrsssssssssstuvwxyz")
            for _ in range(random.randint(20, 40))
        )

        @test.it(f"Testing '{code}'")
        def tests():
            test.assert_equals(parse(code), _solution(code))
