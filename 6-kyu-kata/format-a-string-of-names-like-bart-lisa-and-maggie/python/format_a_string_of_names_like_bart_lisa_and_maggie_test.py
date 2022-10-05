# 6 kyu - Format a string of names like 'Bart, Lisa & Maggie'.  [ ID: 53368a47e38700bd8300030d  (format-a-string-of-names-like-bart-lisa-and-maggie) ]
# URL: https://www.codewars.com/kata/53368a47e38700bd8300030d
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | DATA TYPES | FORMATTING | ALGORITHMS | LOGIC
# ******************************************************************************
def foo():

    from copy import deepcopy

    test.describe("Basic tests")
    test.assert_equals(
        namelist([{"name": "Bart"}, {"name": "Lisa"}, {"name": "Maggie"}, {"name": "Homer"}, {"name": "Marge"}]),
        "Bart, Lisa, Maggie, Homer & Marge",
        "Must work with many names",
    )
    test.assert_equals(
        namelist([{"name": "Bart"}, {"name": "Lisa"}, {"name": "Maggie"}]),
        "Bart, Lisa & Maggie",
        "Must work with many names",
    )
    test.assert_equals(namelist([{"name": "Bart"}, {"name": "Lisa"}]), "Bart & Lisa", "Must work with two names")
    test.assert_equals(namelist([{"name": "Bart"}]), "Bart", "Wrong output for a single name")
    test.assert_equals(namelist([]), "", "Must work with no names")

    test.describe("Random tests")
    from random import randint, shuffle

    def solist(names):
        return (lambda z: ", ".join(z[:-1]) + " & " + z[-1] if len(z) > 1 else "".join(z))(
            (lambda y: [x["name"] for x in y])(names)
        )

    base = [
        {"name": "Bart"},
        {"name": "Lisa"},
        {"name": "Maggie"},
        {"name": "Homer"},
        {"name": "Marge"},
        {"name": "Moe"},
        {"name": "Barney"},
        {"name": "Maude"},
        {"name": "Ned"},
        {"name": "Seymour"},
    ]
    for _ in range(40):
        shuffle(base)
        testmat = base[: randint(0, 9)]
        solution = solist(testmat)
        test.it("Testing for " + (solution if solution != "" else "None"))
        test.assert_equals(namelist(deepcopy(testmat)), solution, "It should work for random tests too")


foo()
