# + =====================================================================================================================
# +
# + 7 kyu - Alternate capitalization  [ ID: 59cfc000aeb2844d16000075 ] (alternate-capitalization)
# + URL: https://www.codewars.com/kata/59cfc000aeb2844d16000075
# + Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from alternate_capitalization import capitalize


import random, string


def capitalize_checker32(s):
    return [
        "".join(ch.upper() if not i % 2 else ch for i, ch in enumerate(s)),
        "".join(ch.upper() if i % 2 else ch for i, ch in enumerate(s)),
    ]


test.it("Basic tests")
test.assert_equals(capitalize("abcdef"), ["AbCdEf", "aBcDeF"])
test.assert_equals(capitalize("codewars"), ["CoDeWaRs", "cOdEwArS"])
test.assert_equals(capitalize("abracadabra"), ["AbRaCaDaBrA", "aBrAcAdAbRa"])
test.assert_equals(capitalize("codewarriors"), ["CoDeWaRrIoRs", "cOdEwArRiOrS"])
test.assert_equals(capitalize("indexinglessons"), ["InDeXiNgLeSsOnS", "iNdExInGlEsSoNs"])
test.assert_equals(capitalize("codingisafunactivity"), ["CoDiNgIsAfUnAcTiViTy", "cOdInGiSaFuNaCtIvItY"])

test.it("Random tests")
for i in range(100):
    r = random.randrange(10, 20)
    s = "".join(random.choice(string.ascii_lowercase) for letter in range(r))
    test.assert_equals(capitalize(s), capitalize_checker32(s))
