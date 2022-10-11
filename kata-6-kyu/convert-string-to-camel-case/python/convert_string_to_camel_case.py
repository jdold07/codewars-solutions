# + =====================================================================================================================
# +
# + 6 kyu - Convert string to camel case  [ ID: 517abf86da9663f1d2000003 ] (convert-string-to-camel-case)
# + URL: https://www.codewars.com/kata/517abf86da9663f1d2000003
# + Category: ALGORITHMS  |  Tags: REGULAR EXPRESSIONS | ALGORITHMS | STRINGS
# +
# + =====================================================================================================================

from re import sub


def to_camel_case(text):
    return sub(r"[-_](\w)", lambda x: x.group(1).upper(), text)


# + =====================================================================================================================
# + =====================================================================================================================


def to_camel_case2(text):
    return sub(r"(?:-|_)(\w)", lambda x: x.group(1).upper(), text)
