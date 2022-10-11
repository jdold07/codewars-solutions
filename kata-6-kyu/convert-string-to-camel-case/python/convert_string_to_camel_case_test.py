# + =====================================================================================================================
# +
# + 6 kyu - Convert string to camel case  [ ID: 517abf86da9663f1d2000003 ] (convert-string-to-camel-case)
# + URL: https://www.codewars.com/kata/517abf86da9663f1d2000003
# + Category: ALGORITHMS  |  Tags: REGULAR EXPRESSIONS | ALGORITHMS | STRINGS
# +
# + =====================================================================================================================

from re import sub
from random import randint
import codewars_test as test
from convert_string_to_camel_case import to_camel_case


def camel_sol(text):
    return sub("[-_](.)", lambda x: x.group(1).upper(), text)


test.describe("Testing function to_camel_case")
test.it("Basic tests")
test.assert_equals(to_camel_case(""), "", "An empty string was provided but not returned")
test.assert_equals(
    to_camel_case("the_stealth_warrior"),
    "theStealthWarrior",
    "to_camel_case('the_stealth_warrior') did not return correct value",
)
test.assert_equals(
    to_camel_case("The-Stealth-Warrior"),
    "TheStealthWarrior",
    "to_camel_case('The-Stealth-Warrior') did not return correct value",
)
test.assert_equals(to_camel_case("A-B-C"), "ABC", "to_camel_case('A-B-C') did not return correct value")

test.it("Random tests")
for i in range(10):
    word = ["the", "The", "a", "A"][randint(0, 3)]
    word += ["-", "_"][randint(0, 1)]
    word += ["cat", "Cat", "pippi", "Pippi"][randint(0, 3)]
    word += ["-", "_"][randint(0, 1)]
    word += ["is", "was", "Is", "Was"][randint(0, 3)]
    word += ["-", "_"][randint(0, 1)]
    word += ["cute", "Savage", "pippi", "Pippi", "kawaii", "Omoshiroi", "evil", "Hungry"][randint(0, 7)]
    test.assert_equals(to_camel_case(word), camel_sol(word), "to_camel_case(" + word + ") did not return correct value")
