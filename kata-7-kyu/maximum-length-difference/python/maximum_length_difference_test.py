# + =====================================================================================================================
# +
# + 7 kyu - Maximum Length Difference  [ ID: 5663f5305102699bad000056 ] (maximum-length-difference)
# + URL: https://www.codewars.com/kata/5663f5305102699bad000056
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from maximum_length_difference import mxdiflg


@test.describe("mxdiflg")
def _():
    @test.it("Basic tests")
    def _():
        s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
        s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
        test.assert_equals(mxdiflg(s1, s2), 13)
        s1 = ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"]
        s2 = ["bbbaaayddqbbrrrv"]
        test.assert_equals(mxdiflg(s1, s2), 10)
        s1 = ["ccct", "tkkeeeyy", "ggiikffsszzoo", "nnngssddu", "rrllccqqqqwuuurdd", "kkbbddaakkk"]
        s2 = ["tttxxxxxxgiiyyy", "ooorcvvj", "yzzzhhhfffaaavvvpp", "jjvvvqqllgaaannn", "tttooo", "qmmzzbhhbb"]
        test.assert_equals(mxdiflg(s1, s2), 14)
        s1 = []
        s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
        test.assert_equals(mxdiflg(s1, s2), -1)
        s2 = []
        s1 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
        test.assert_equals(mxdiflg(s1, s2), -1)
        s1 = []
        s2 = []
        test.assert_equals(mxdiflg(s1, s2), -1)

    from random import randint

    def mxdiflgSol(a1, a2):
        mx = -1
        for x in a1:
            for y in a2:
                diff = abs(len(x) - len(y))
                if diff > mx:
                    mx = diff
        return mx

    def do_ex(k):
        a1, i = [], 0
        while i < k:
            res, j = "", 0
            while j < randint(1, 20):
                res += chr(randint(97, 122)) * randint(1, 3)
                j += 1
            a1.append(res)
            i += 1
        return a1

    @test.it("Random tests")
    def randomTests():
        for _ in range(0, 100):
            s1 = do_ex(randint(0, 10))
            s2 = do_ex(randint(0, 8))
            test.assert_equals(mxdiflg(s1, s2), mxdiflgSol(s1, s2))
