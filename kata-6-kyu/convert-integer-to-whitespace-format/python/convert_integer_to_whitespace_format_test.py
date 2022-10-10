# + =====================================================================================================================
# +
# + 6 kyu - Convert integer to Whitespace format  [ ID: 55b350026cc02ac1a7000032 ] (convert-integer-to-whitespace-format)
# + URL: https://www.codewars.com/kata/55b350026cc02ac1a7000032
# + Category: REFERENCE  |  Tags: BINARY | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from convert_integer_to_whitespace_format import unbleach


def unbleach(ws):
    return ws.replace(" ", "[space]").replace("\t", "[tab]").replace("\n", "[LF]")


def tester81247129(n, expected=None):
    test.it("Let's try it with %s:" % n)
    actual = whitespace_number(n)
    assert not set(actual) - set(" \n\t"), (
        "Please return only spaces, tabs and newlines. "
        + "Other characters are not allowed.\n"
        + "Tests will convert the allowed characters"
        + "to readable tags for your convenience."
    )
    if not expected:
        expected = " \t"[n < 0] + (bin(abs(n))[2:].replace("0", " ").replace("1", "\t") if n else "") + "\n"
    test.assert_equals(unbleach(actual), unbleach(expected))


test.describe("Example tests")
for n, expected in ((1, " \t\n"), (0, " \n"), (-1, "\t\t\n"), (2, " \t \n"), (-3, "\t\t\t\n")):
    tester81247129(n, expected)

from random import randint

test.describe("Random tests")
for i174271 in range(1, 38):
    tester81247129(randint(9 - 2**i174271, 9 + 2**i174271))
