# + =====================================================================================================================
# +
# + 8 kyu - Is the string uppercase?  [ ID: 56cd44e1aa4ac7879200010b ] (is-the-string-uppercase)
# + URL: https://www.codewars.com/kata/56cd44e1aa4ac7879200010b
# + Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
# +
# + =====================================================================================================================

import codewars_test as test
from is_the_string_uppercase import is_uppercase
from string import ascii_lowercase, ascii_uppercase
from random import sample, randrange


def gen_test_case(inp, res):
    test.assert_equals(is_uppercase(inp), res, inp)


test.describe("Basic Tests")

gen_test_case("c", False)
gen_test_case("C", True)
gen_test_case("hello I AM DONALD", False)
gen_test_case("HELLO I AM DONALD", True)
gen_test_case("ACSKLDFJSgSKLDFJSKLDFJ", False)
gen_test_case("ACSKLDFJSGSKLDFJSKLDFJ", True)
gen_test_case("$%&", True)

test.describe("Random Test")


CHARS = ascii_lowercase + ascii_uppercase + ' _!@#$%^&*())_+1234567890~`{}|[]\:";<>?,./'

for i in range(50):
    strng = "".join(sample(CHARS, randrange(1, 51)))
    if i % 5 == 0:
        strng = strng.upper()
    expected = strng == strng.upper()
    test.assert_equals(is_uppercase(strng), expected, strng)
