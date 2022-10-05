# 6 kyu - Make the Deadfish Swim  [ ID: 51e0007c1f9378fa810002a9  (make-the-deadfish-swim) ]
# URL: https://www.codewars.com/kata/51e0007c1f9378fa810002a9
# Category: ALGORITHMS  |  Tags: PARSING | ALGORITHMS
# ******************************************************************************
def parse(data):
    result = []
    value = 0
    for instruction in data:
        if instruction == "i":
            value += 1
        elif instruction == "d":
            value -= 1
        elif instruction == "s":
            value **= 2
        elif instruction == "o":
            result.append(value)
        else:
            continue
    return result
