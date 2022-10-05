# 8 kyu - Fundamentals: Return  [ ID: 55a5befdf16499bffb00007b  (fundamentals-return) ]
# URL: https://www.codewars.com/kata/55a5befdf16499bffb00007b
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
test.it("Normal Tests:")
test.assert_equals(add(1, 2), 3)
test.assert_equals(multiply(1, 2), 2)
test.assert_equals(divide(2, 1), 2)
test.assert_equals(mod(1, 2), 1)
test.assert_equals(exponent(1, 2), 1)
test.assert_equals(subt(1, 2), -1)

test.it("Validation Tests:")
test.assert_equals(add(5, 7), 12)
test.assert_equals(multiply(5, 2), 10)
test.assert_equals(divide(40, 10), 4)
test.assert_equals(mod(5, 10), 5)
test.assert_equals(exponent(2, 10), 1024)
test.assert_equals(subt(5832, 1832), 4000)

test.it("Random Tests:")


def random_tests():
    # in a separate function so we don't leak anything into the global namespace
    import operator
    import random

    operators = (
        (add, operator.add),
        (multiply, operator.mul),
        # (divide, operator.div),
        (mod, operator.mod),
        (exponent, operator.pow),
        (subt, operator.sub),
    )
    for _ in range(50):
        a = random.randint(1, 100)
        b = random.randint(1, 100)
        for op1, op2 in operators:
            expected = op2(a, b)
            actual = op1(a, b)
            test.assert_equals(actual, expected, "{.__name__}({!r}, {!r})".format(op1, a, b))
        # for division we accept both truediv and floordiv
        expected1 = operator.floordiv(a, b)
        expected2 = operator.truediv(a, b)
        actual = divide(a, b)
        test.expect(
            actual in (expected1, expected2),
            "divide({!r}, {!r}) should return {!r} or {!r}, actual: {!r}".format(a, b, expected1, expected2, actual),
        )


random_tests()
