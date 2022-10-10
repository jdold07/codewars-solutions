# + =====================================================================================================================
# +
# + 7 kyu - Fix string case  [ ID: 5b180e9fedaa564a7000009a ] (fix-string-case)
# + URL: https://www.codewars.com/kata/5b180e9fedaa564a7000009a
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from fix_string_case import solve


import random, string

test.it("Basic tests")
test.assert_equals(solve("code"), "code")
test.assert_equals(solve("CODe"), "CODE")
test.assert_equals(solve("COde"), "code")
test.assert_equals(solve("Code"), "code")


def rand98():
    def nj785(s):
        return s.lower() if (len(list(filter(lambda x: x.islower(), s)))) * 2 >= len(s) else s.upper()

    letters = [string.ascii_lowercase, string.ascii_uppercase]
    test.it("Random tests")
    for i in range(0, 100):
        res = ""
        for j in range(0, 100):
            opt, lett = random.randrange(0, 2), random.randrange(0, 26)
            res += letters[opt][lett]
        exp = nj785(res)
        test.assert_equals(solve(res), exp)
    r0 = random.randrange(15, 26)
    x = letters[0][:r0] + letters[1][:r0]
    exp = nj785(x)
    test.assert_equals(solve(x), exp)


rand98()
