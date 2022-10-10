# + =====================================================================================================================
# +
# + 6 kyu - Meeting  [ ID: 59df2f8f08c6cec835000012 ] (meeting)
# + URL: https://www.codewars.com/kata/59df2f8f08c6cec835000012
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from meeting import UNKNOWN


from functools import cmp_to_key
from random import randint, shuffle


def testing(s, exp):
    print("Testing:\n" + s)
    ans = meeting(s)
    print("ACTUAL =\n%s" % (ans))
    print("EXPECT =\n%s" % (exp))
    print(ans == exp)
    test.assert_equals(ans, exp)


test.describe("meeting")
test.it("Basic tests")


def tests():
    testing(
        "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn",
        "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)",
    )
    testing(
        "John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell",
        "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)",
    )
    testing(
        "Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern",
        "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)",
    )
    testing(
        "Anna:Wahl;Grace:Gates;James:Russell;Elizabeth:Rudd;Victoria:STAN;Jacob:Wahl;Alex:Wahl;Antony:Gates;Alissa:Meta;Megan:Bell;Amandy:Stan;Anna:Steve",
        "(BELL, MEGAN)(GATES, ANTONY)(GATES, GRACE)(META, ALISSA)(RUDD, ELIZABETH)(RUSSELL, JAMES)(STAN, AMANDY)(STAN, VICTORIA)(STEVE, ANNA)(WAHL, ALEX)(WAHL, ANNA)(WAHL, JACOB)",
    )
    testing(
        "Ann:Russel;John:Gates;Paul:Wahl;Alex:Tolkien;Ann:Bell;Lewis:Kern;Sarah:Rudd;Sydney:Korn;Madison:Meta",
        "(BELL, ANN)(GATES, JOHN)(KERN, LEWIS)(KORN, SYDNEY)(META, MADISON)(RUDD, SARAH)(RUSSEL, ANN)(TOLKIEN, ALEX)(WAHL, PAUL)",
    )
    testing(
        "Paul:Arno;Matthew:Schwarz;Amandy:Meta;Grace:Meta;Ann:Arno;Alex:Schwarz;Jacob:Rudd;Amber:Cornwell",
        "(ARNO, ANN)(ARNO, PAUL)(CORNWELL, AMBER)(META, AMANDY)(META, GRACE)(RUDD, JACOB)(SCHWARZ, ALEX)(SCHWARZ, MATTHEW)",
    )
    testing(
        "Abba:Bell;Lewis:Cornwell;Jacob:STAN;Matthew:Schwarz;Ann:STAN;Sophia:Gates;Victoria:Korn;Anna:Bell;Paul:Kern;Alissa:Tolkien",
        "(BELL, ABBA)(BELL, ANNA)(CORNWELL, LEWIS)(GATES, SOPHIA)(KERN, PAUL)(KORN, VICTORIA)(SCHWARZ, MATTHEW)(STAN, ANN)(STAN, JACOB)(TOLKIEN, ALISSA)",
    )
    testing(
        "Victoria:Thorensen;Ann:Arno;Alexis:Wahl;Emily:Stan;Anna:STAN;Jacob:Korn;Sophia:Gates;Amber:Kern",
        "(ARNO, ANN)(GATES, SOPHIA)(KERN, AMBER)(KORN, JACOB)(STAN, ANNA)(STAN, EMILY)(THORENSEN, VICTORIA)(WAHL, ALEXIS)",
    )
    testing(
        "Andrew:Arno;Jacob:Russell;Anna:STAN;Antony:Gates;Amber:Korn;Lewis:Dorries;Ann:Burroughs;Alex:Kern;Anna:Arno;Elizabeth:Kern;John:Schwarz;Sarah:STAN",
        "(ARNO, ANDREW)(ARNO, ANNA)(BURROUGHS, ANN)(DORRIES, LEWIS)(GATES, ANTONY)(KERN, ALEX)(KERN, ELIZABETH)(KORN, AMBER)(RUSSELL, JACOB)(SCHWARZ, JOHN)(STAN, ANNA)(STAN, SARAH)",
    )
    testing(
        "Megan:Wahl;Alexis:Arno;Alex:Wahl;Grace:STAN;Amber:Kern;Amandy:Schwarz;Alissa:Stan;Paul:Kern;Ann:Meta;Lewis:Burroughs;Andrew:Bell",
        "(ARNO, ALEXIS)(BELL, ANDREW)(BURROUGHS, LEWIS)(KERN, AMBER)(KERN, PAUL)(META, ANN)(SCHWARZ, AMANDY)(STAN, ALISSA)(STAN, GRACE)(WAHL, ALEX)(WAHL, MEGAN)",
    )


tests()
print("<COMPLETEDIN::>")
print("<COMPLETEDIN::>")

test.describe("meeting")
test.it("Random Tests")
fnams = [
    "Emily",
    "Sophia",
    "Anna",
    "Anna",
    "Sarah",
    "Michael",
    "Jacob",
    "Alex",
    "Alex",
    "Alex",
    "Antony",
    "John",
    "Matthew",
    "Andrew",
    "Paul",
    "Paul",
    "Ann",
    "Ann",
    "Ann",
    "Ann",
    "Robert",
    "Megan",
    "Alissa",
    "Alexis",
    "Grace",
    "Madison",
    "Elizabeth",
    "James",
    "Amandy",
    "Abba",
    "Victoria",
    "Amber",
    "Sydney",
    "Haley",
    "Lewis",
]
names = [
    "Korn",
    "Arno",
    "Arno",
    "Bell",
    "Bell",
    "Kern",
    "Kern",
    "Kern",
    "Russel",
    "Meta",
    "Meta",
    "Meta",
    "Cornwell",
    "Cornwell",
    "Wahl",
    "Wahl",
    "Wahl",
    "Wahl",
    "Dorny",
    "Dorries",
    "Stan",
    "STAN",
    "STAN",
    "Thorensen",
    "Schwarz",
    "Schwarz",
    "Gates",
    "Steve",
    "Tolkien",
    "Burroughs",
    "Gates",
    "Bell",
    "Korn",
    "Russell",
    "Rudd",
]


def compose39(k):
    k = max(8, k)
    shuffle(fnams)
    shuffle(names)
    res = ""
    i = 0
    while i < k:
        res += fnams[i] + ":" + names[i] + ";"
        i += 1
    return res[0:-2]


def meeting390(s):
    def comp(a, b):
        if a[1] == b[1]:
            return -1 if a[0] < b[0] else 1
        else:
            return -1 if a[1] < b[1] else 1

    w = map(lambda x: x.split(":"), s.upper().split(";"))
    u = sorted(w, key=cmp_to_key(comp))
    return "".join(map(lambda a: "(" + a[1] + ", " + a[0] + ")", u))


def random_tests(k):
    print("----------------------------")
    i = 0
    while i < k:
        rn = randint(6, 12)
        s = compose39(rn)
        sol = meeting390(s)
        testing(s, sol)
        i += 1


random_tests(100)
print("<COMPLETEDIN::>")
print("<COMPLETEDIN::>")
