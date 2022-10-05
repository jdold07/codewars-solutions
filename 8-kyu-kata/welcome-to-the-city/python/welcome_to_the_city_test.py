# 8 kyu - Welcome to the City  [ ID: 5302d846be2a9189af0001e4  (welcome-to-the-city) ]
# URL: https://www.codewars.com/kata/5302d846be2a9189af0001e4
# Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import say_hello


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(
            say_hello(["John", "Smith"], "Phoenix", "Arizona"),
            "Hello, John Smith! Welcome to Phoenix, Arizona!",
            "Hello, John Smith! Welcome to Phoenix, Arizona!",
        )
        test.assert_equals(
            say_hello(["Franklin", "Delano", "Roosevelt"], "Chicago", "Illinois"),
            "Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!",
        )
        test.assert_equals(
            say_hello(["Wallace", "Russel", "Osbourne"], "Albany", "New York"),
            "Hello, Wallace Russel Osbourne! Welcome to Albany, New York!",
        )
        test.assert_equals(
            say_hello(["Lupin", "the", "Third"], "Los Angeles", "California"),
            "Hello, Lupin the Third! Welcome to Los Angeles, California!",
        )
        test.assert_equals(
            say_hello(["Marlo", "Stanfield"], "Baltimore", "Maryland"),
            "Hello, Marlo Stanfield! Welcome to Baltimore, Maryland!",
        )


@test.describe("Random Tests")
def random_tests():

    from random import randint

    names = [
        ["Frank", "Underwood"],
        ["Claire", "Underwood"],
        ["Douglas", '"Doug"', "Stamper"],
        ["Zoe", "Barnes"],
        ["Peter", "Russo"],
        ["Remy", "Danton"],
        ["Former", "President", "Garrett", "Walker"],
    ]
    cities = ["New York City", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Detroit"]
    states = ["New York", "California", "Illinois", "Texas", "Pennsylvania", "Michigan"]

    sol = lambda name, city, state: "Hello, " + " ".join(name) + "! Welcome to " + city + ", " + state + "!"

    for _ in range(40):
        name = names[randint(0, len(names) - 1)]
        location = randint(0, len(cities) - 1)
        city = cities[location]
        state = states[location]
        expected = sol(name, city, state)

        @test.it(f'Testing for {" ".join(name)} in {city}, {state}')
        def test_case():
            test.assert_equals(say_hello(name, city, state), expected)
