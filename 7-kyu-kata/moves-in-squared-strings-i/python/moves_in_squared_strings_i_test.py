# 7 kyu - Moves in squared strings (I)  [ ID: 56dbe0e313c2f63be4000b25  (moves-in-squared-strings-i) ]
# URL: https://www.codewars.com/kata/56dbe0e313c2f63be4000b25
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS | STRINGS
# ******************************************************************************
def testing(actual, expected):
    test.assert_equals(actual, expected)


test.describe("opstrings")
test.it("Basic tests vert_mirror")
testing(
    oper(vert_mirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"), "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
)
testing(
    oper(vert_mirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"), "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP"
)
testing(oper(vert_mirror, "cuQW\nxOuD\nfZwp\neqFx"), "WQuc\nDuOx\npwZf\nxFqe")
testing(
    oper(vert_mirror, "CDGIdolo\nUstXfrIg\ntMqjvxWL\nBEyuCnAm\nxsxaEERa\nxZsvOiZS\nLutlBRXE\ntxshhbqE"),
    "olodIGDC\ngIrfXtsU\nLWxvjqMt\nmAnCuyEB\naREEaxsx\nSZiOvsZx\nEXRBltuL\nEqbhhsxt",
)

test.it("Basic tests hor_mirror")
testing(oper(hor_mirror, "lVHt\nJVhv\nCSbg\nyeCt"), "yeCt\nCSbg\nJVhv\nlVHt")
testing(oper(hor_mirror, "njMK\ndbrZ\nLPKo\ncEYz"), "cEYz\nLPKo\ndbrZ\nnjMK")
testing(oper(hor_mirror, "QMxo\ntmFe\nWLUG\nowoq"), "owoq\nWLUG\ntmFe\nQMxo")
testing(oper(hor_mirror, "FYvi\ndZQn\nuGef\nQoSy"), "QoSy\nuGef\ndZQn\nFYvi")

from random import randint


def do_ex(k):
    if k % 2 == 1:
        k += 1
    j, res = 0, []
    while j < k:
        s, i = "", 0
        while i < k:
            if randint(0, 100) % 2 == 0:
                s += chr(randint(97, 122))
            else:
                s += chr(randint(65, 90))
            i += 1
        res.append(s)
        j += 1
    return "\n".join(res)


def vert_mirror213(strng):
    return "\n".join(map(lambda x: x[::-1], strng.split("\n")))


def hor_mirror213(strng):
    return "\n".join(strng.split("\n")[::-1])


def tests_code1():
    print("Random tests vert_mirror")
    i = 0
    while i < 100:
        s = do_ex(randint(8, 20))
        testing(oper(vert_mirror, s), vert_mirror213(s))
        i += 1


tests_code1()


def tests_code2():
    print("Random tests hor_mirror")
    i = 0
    while i < 100:
        s = do_ex(randint(8, 20))
        testing(oper(hor_mirror, s), hor_mirror213(s))
        i += 1


tests_code2()
