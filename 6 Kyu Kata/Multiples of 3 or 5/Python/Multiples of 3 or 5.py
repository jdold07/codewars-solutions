#
# * My submitted solution
def solution(n):
    return sum(i for i in range(1, n) if i % 3 == 0 or i % 5 == 0)


# * An alternative solution not submitted, but passed test for submission
def solution2(n):
    res = 0
    for i in range(1, n):
        if i % 3 == 0 or i % 5 == 0:
            res += i
    return res


# * Solution from test cases for reference
def referenceSolution(n):

    if n < 0:
        return 0

    def sum(max, d):
        n = max // d
        s = n * (n + 1) * d // 2
        return s

    n -= 1
    return sum(n, 3) + sum(n, 5) - sum(n, 3 * 5)
