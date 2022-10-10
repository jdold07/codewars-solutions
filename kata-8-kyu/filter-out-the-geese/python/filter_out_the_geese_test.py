# + =====================================================================================================================
# +
# + 8 kyu - Filter out the geese  [ ID: 57ee4a67108d3fd9eb0000e7 ] (filter-out-the-geese)
# + URL: https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
# + Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from filter_out_the_geese import goose_filter


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(
            goose_filter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),
            ["Mallard", "Hook Bill", "Crested", "Blue Swedish"],
        )
        test.assert_equals(
            goose_filter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),
            ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"],
        )
        test.assert_equals(goose_filter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]), [])


@test.describe("Random Tests")
def random_tests():

    from random import randint, random

    sol = lambda b: [e for e in b if e not in ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]]

    base = [
        "Mallard",
        "Roman Tufted",
        "Steinbacher",
        "Hook Bill",
        "African",
        "Crested",
        "Pilgrim",
        "Toulouse",
        "Blue Swedish",
        "Pippi",
        "Phoenix",
        "Tiamat",
        "Red Dragon",
        "Wyvern",
        "Manbat",
        "Kinto-kun",
        "Harpy",
        "Roc",
        "Celestial Eagle",
        "Infernal Hawk",
        "Hawkgirl",
        "Terran Battlecruiser",
        "Protoss Carrier",
        "Zerg Leviathan",
    ]

    for _ in range(40):
        g = sorted(base, key=lambda a: random())[: randint(1, len(base) - 1)]
        expected = sol(g)

        @test.it(f"Testing for goose_filter({g})")
        def test_case():
            test.assert_equals(goose_filter(g), expected)
