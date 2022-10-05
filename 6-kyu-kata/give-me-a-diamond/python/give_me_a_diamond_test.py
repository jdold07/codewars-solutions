# 6 kyu - Give me a Diamond  [ ID: 5503013e34137eeeaa001648  (give-me-a-diamond) ]
# URL: https://www.codewars.com/kata/5503013e34137eeeaa001648
# Category: REFERENCE  |  Tags: STRINGS | ASCII ART | FUNDAMENTALS
# ******************************************************************************
@test.describe("Fixed tests")
def fff():
    test.assert_equals(diamond(3), " *\n***\n *\n")
    test.assert_equals(diamond(0), None)
    test.assert_equals(diamond(2), None)
    test.assert_equals(diamond(-1), None)
    test.assert_equals(diamond(-2), None)

@test.describe("Random tests")
def fff():
    
    def known_diamond(n):
        if n % 2 == 0 or n < 0:
            return None
        result = []
        def append(c, n, nl):
            for _ in range(n):
                result.append(c)
            if nl:
                result.append('\n')
        indent = n // 2
        for i in range(indent, 0, -1):
            append(' ', i, False)
            append('*', n - 2 * i, True)
        append('*', n, True)
        for i in range(1, indent + 1):
            append(' ', i, False)
            append('*', n - 2 * i, True)
        return "".join(result)
    
    from random import randrange as rand
    
    for _ in range(25):
        n = rand(1,20) if rand(4) else rand(-20,5)
        exp = known_diamond(n)
        test.assert_equals(diamond(n), exp)
