# + =====================================================================================================================
# +
# + 6 kyu - N-th Fibonacci  [ ID: 522551eee9abb932420004a0 ] (n-th-fibonacci)
# + URL: https://www.codewars.com/kata/522551eee9abb932420004a0
# + Category: ALGORITHMS  |  Tags: ALGORITHMS
# +
# + =====================================================================================================================


def nth_fib(n):
    if n > 1:
        a, b = 0, 1
        for i in range(2, n):
            b, a = a + b, b
        return b
    return 0
