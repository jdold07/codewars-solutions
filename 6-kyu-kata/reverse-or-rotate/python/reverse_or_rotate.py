# 6 kyu - Reverse or rotate?  [ ID: 56b5afb4ed1f6d5fb0000991  (reverse-or-rotate) ]
# URL: https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991
# Category: REFERENCE  |  Tags: ALGORITHMS | STRINGS
# ******************************************************************************
def revrot(strng, sz):
    result = ""
    if len(strng) > sz and sz > 0:
        arr = []
        while len(strng) >= sz:
            arr.append(strng[0:sz])
            strng = strng.replace(strng[0:sz], "")
        for x in arr:
            if not sum(int(y) ** 3 for y in list(x)) % 2:
                result += x[::-1]
            else:
                x += x[0]
                result += x[1:]
    return result
