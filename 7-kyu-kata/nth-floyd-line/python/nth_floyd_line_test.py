# 7 kyu - nth Floyd line  [ ID: 5b096efeaf15bef812000010  (nth-floyd-line) ]
# URL: https://www.codewars.com/kata/5b096efeaf15bef812000010
# Category: REFERENCE  |  Tags: MATHEMATICS | PUZZLES | FUNDAMENTALS
# ******************************************************************************
import random as r


def ktest():
    def static():

        testc = [
            [15, 5],
            [26, 7],
            [17, 6],
            [24, 7],
            [19, 6],
            [5, 3],
            [212, 21],
        ]
        r.shuffle(testc)

        test.it("Static tests")
        for n, s in testc:
            soln = s
            test.assert_equals(nth_floyd(n), soln, "Wrong Value")

    static()

    def nf(n, l=0, r=10e8):
        strt = lambda l: int((1 + (l - 1) * l) - (((l - 1) / 2) * (2 + (l - 2))))
        while l <= r:
            m = int(l + r) // 2
            begin = strt(m)
            end = begin + m - 1
            if begin <= n and end >= n:
                return m
            elif end < n:
                l = m + 1
            elif begin > n:
                r = m - 1

    def rand():
        test.it("Random tests")
        for i in range(100):
            n = r.randint(1, 10**5)
            soln = nf(n)
            test.assert_equals(nth_floyd(n), soln, "Wrong value")

        for i in range(100):
            n = r.randint(10**5, 10**9)
            soln = nf(n)
            test.assert_equals(nth_floyd(n), soln, "Wrong value")

    rand()


ktest()
