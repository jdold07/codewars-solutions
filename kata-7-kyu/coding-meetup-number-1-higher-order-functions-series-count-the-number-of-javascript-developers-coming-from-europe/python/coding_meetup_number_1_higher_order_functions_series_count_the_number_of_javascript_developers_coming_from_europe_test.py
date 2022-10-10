# + =====================================================================================================================
# +
# + 7 kyu - Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe  [ ID: 582746fa14b3892727000c4f ] (coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe)
# + URL: https://www.codewars.com/kata/582746fa14b3892727000c4f
# + Category: ALGORITHMS  |  Tags: DATA STRUCTURES | FUNDAMENTALS | ALGORITHMS | STRINGS | REGULAR EXPRESSIONS | ARRAYS | FUNCTIONAL PROGRAMMING
# +
# + =====================================================================================================================

import codewars_test as test
from coding_meetup_number_1_higher_order_functions_series_count_the_number_of_javascript_developers_coming_from_europe import (
    count_developers,
)


from random import randint, choice, choices
import string


@test.describe("Example")
def test_group():
    @test.it("test case")
    def test_case():

        list1 = [
            {
                "firstName": "Noah",
                "lastName": "M.",
                "country": "Switzerland",
                "continent": "Europe",
                "age": 19,
                "language": "JavaScript",
            },
            {
                "firstName": "Maia",
                "lastName": "S.",
                "country": "Tahiti",
                "continent": "Oceania",
                "age": 28,
                "language": "JavaScript",
            },
            {
                "firstName": "Shufen",
                "lastName": "L.",
                "country": "Taiwan",
                "continent": "Asia",
                "age": 35,
                "language": "HTML",
            },
            {
                "firstName": "Sumayah",
                "lastName": "M.",
                "country": "Tajikistan",
                "continent": "Asia",
                "age": 30,
                "language": "CSS",
            },
        ]

        list2 = [
            {
                "firstName": "Oliver",
                "lastName": "Q.",
                "country": "Australia",
                "continent": "Oceania",
                "age": 19,
                "language": "HTML",
            },
            {
                "firstName": "Lukas",
                "lastName": "R.",
                "country": "Austria",
                "continent": "Europe",
                "age": 89,
                "language": "HTML",
            },
        ]

        test.assert_equals(count_developers(list1), 1)
        test.assert_equals(count_developers(list2), 0)


@test.describe("Random Tests")
def random_tests():
    def generate_random_case():
        def generate_random_string(mini=1, maxi=10):
            return "".join(choices(string.ascii_letters, k=randint(mini, maxi))).title()

        def generate_random_item():
            firstName = generate_random_string()
            lastName = generate_random_string()
            continent = choice(("Africa", "Americas", "Asia", "Europe", "Oceania"))
            country = generate_random_string()
            age = randint(20, 90)
            language = choice(("Ruby", "Java", "Python", "C", "Clojure", "PHP", "JavaScript", "R"))

            return {
                "firstName": firstName,
                "lastName": lastName,
                "country": country,
                "continent": continent,
                "age": age,
                "language": language,
            }

        return [generate_random_item() for _ in range(randint(1, 500))]

    def _count_developers_ref(lst):
        return len([x for x in lst if x["language"] == "JavaScript" and x["continent"] == "Europe"])

    def _do_one_test():
        lst = generate_random_case()
        expected = _count_developers_ref(lst[:])
        actual = count_developers(lst[:])
        test.assert_equals(actual, expected)

    @test.it("Random Test Cases")
    def random_test_cases():
        for _ in range(100):
            _do_one_test()
