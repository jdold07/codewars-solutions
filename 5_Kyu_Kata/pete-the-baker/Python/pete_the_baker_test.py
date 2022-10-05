# [object Object] - Pete, the baker  [ ID: 525c65e51bf619685c000059  (pete-the-baker) ]
# URL: https://www.codewars.com/kata/525c65e51bf619685c000059
# Category: ALGORITHMS  |  Tags: ALGORITHMS
# ******************************************************************************
from random import randrange, sample
from functools import reduce
import codewars_test as test
from solution import cakes


def run_assertion(testcase):
    test.assert_equals(
        cakes(testcase["recipe"].copy(), testcase["available"].copy()),
        testcase["result"],
        "Wrong result for recipe {!r} and available ingredients {!r}".format(
            testcase["recipe"],
            testcase["available"],
        ),
    )


@test.describe("static tests")
def _():
    @test.it("basic recipes")
    def _basic():
        run_assertion(
            {
                "recipe": {"flour": 500, "sugar": 200, "eggs": 1},
                "available": {
                    "flour": 1200,
                    "sugar": 1200,
                    "eggs": 5,
                    "milk": 200,
                },
                "result": 2,
            }
        )
        run_assertion(
            {
                "recipe": {
                    "cream": 200,
                    "flour": 300,
                    "sugar": 150,
                    "milk": 100,
                    "oil": 100,
                },
                "available": {
                    "sugar": 1700,
                    "flour": 20000,
                    "milk": 20000,
                    "oil": 30000,
                    "cream": 5000,
                },
                "result": 11,
            }
        )

    @test.it("missing ingredient")
    def _missing():
        run_assertion(
            {
                "recipe": {
                    "apples": 3,
                    "flour": 300,
                    "sugar": 150,
                    "milk": 100,
                    "oil": 100,
                },
                "available": {"sugar": 500, "flour": 2000, "milk": 2000},
                "result": 0,
            }
        )

    @test.it("not enough ingredients")
    def _insufficient():
        run_assertion(
            {
                "recipe": {
                    "apples": 3,
                    "flour": 300,
                    "sugar": 150,
                    "milk": 100,
                    "oil": 100,
                },
                "available": {
                    "sugar": 500,
                    "flour": 2000,
                    "milk": 2000,
                    "apples": 15,
                    "oil": 20,
                },
                "result": 0,
            }
        )

    @test.it("no ingredients available")
    def _nothing():
        run_assertion(
            {
                "recipe": {"eggs": 4, "flour": 400},
                "available": {},
                "result": 0,
            }
        )

    @test.it("exactly enough ingredients for 1 cake")
    def _one():
        run_assertion(
            {
                "recipe": {
                    "cream": 1,
                    "flour": 3,
                    "sugar": 1,
                    "milk": 1,
                    "oil": 1,
                    "eggs": 1,
                },
                "available": {
                    "sugar": 1,
                    "eggs": 1,
                    "flour": 3,
                    "cream": 1,
                    "oil": 1,
                    "milk": 1,
                },
                "result": 1,
            }
        )


@test.it("random tests")
def doRndTests():
    ingredients = [
        "flour",
        "eggs",
        "oil",
        "milk",
        "apples",
        "sugar",
        "cream",
        "pears",
        "butter",
        "nuts",
        "chocolate",
        "cocoa",
        "crumbles",
    ]

    def reference(r, a):
        return min(map(lambda c: a.get(c, 0) // r[c], r))

    for i in range(50):
        recipe = {}
        available = {}

        for item in sample(ingredients, k=3):
            recipe[item] = randrange(100) + 1

        for item in sample(ingredients, k=10):
            available[item] = randrange(10000)

        run_assertion(
            {
                "recipe": recipe,
                "available": available,
                "result": reference(recipe, available),
            }
        )
