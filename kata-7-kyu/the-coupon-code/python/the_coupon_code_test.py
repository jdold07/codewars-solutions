# + =====================================================================================================================
# +
# + 7 kyu - The Coupon Code  [ ID: 539de388a540db7fec000642 ] (the-coupon-code)
# + URL: https://www.codewars.com/kata/539de388a540db7fec000642
# + Category: REFERENCE  |  Tags: DATE TIME | STRINGS | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from the_coupon_code import check_coupon


test.describe("Basic Tests")
test.assert_equals(check_coupon("123", "123", "September 5, 2014", "October 1, 2014"), True)
test.assert_equals(check_coupon("123a", "123", "September 5, 2014", "October 1, 2014"), False)
test.assert_equals(check_coupon("12abcd3", "12abcd3", "January 5, 2014", "January 1, 2014"), False)
test.assert_equals(check_coupon("123ablqc0", "123ablqc0", "July 5, 2000", "July 5, 2000"), True)
test.assert_equals(check_coupon("abc", "abc", "November 8, 2013", "November 5, 2014"), True)
test.assert_equals(check_coupon(0, False, "September 5, 2014", "September 25, 2014"), False)
test.assert_equals(check_coupon("0", False, "September 5, 2014", "September 25, 2014"), False)
test.assert_equals(check_coupon("1", True, "September 5, 2014", "September 25, 2014"), False)
test.assert_equals(check_coupon(1 + 1, "2", "September 5, 2014", "September 25, 2014"), False)
test.assert_equals(check_coupon("a12v564", "a12v564", "March 5, 1998", "March 25, 1998"), True)
test.assert_equals(check_coupon("0a12bc64", "0a12bc64", "March 6, 2005", "March 5, 2006"), True)

import random

test.describe("Random Tests")

MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

randmonth = lambda: random.choice(MONTHS)
randday = lambda: random.randrange(1, 29)
randyear = lambda: 1980 + random.randrange(40)
randdate = lambda: "{} {}, {}".format(randmonth(), randday(), randyear())
randcode = lambda: random.choice(["bdab987ba8f", "5nyi7n868u696u0u6"])


def masterCheck(entered_code, correct_code, current_date, expiration_date):
    from time import strptime

    return (
        entered_code == correct_code
        and type(entered_code) == type(correct_code)
        and strptime(current_date, "%B %d, %Y") <= strptime(expiration_date, "%B %d, %Y")
    )


for i in range(15):
    code_a = randcode()
    code_b = randcode()
    date_a = randdate()
    date_b = randdate()
    exp = masterCheck(code_a, code_b, date_a, date_b)
    test.assert_equals(check_coupon(code_a, code_b, date_a, date_b), exp)
