# + =====================================================================================================================
# +
# + 7 kyu - Alphabet war  [ ID: 59377c53e66267c8f6000027 ] (alphabet-war)
# + URL: https://www.codewars.com/kata/59377c53e66267c8f6000027
# + Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
# +
# + =====================================================================================================================


def alphabet_war(fight):
    points = {"w": 4, "p": 3, "b": 2, "s": 1, "m": -4, "q": -3, "d": -2, "z": -1}
    result = 0
    for x in fight:
        result += points.get(x) or 0
    return "Left side wins!" if result > 0 else "Right side wins!" if result < 0 else "Let's fight again!"


# ======================================================================================================================
# ======================================================================================================================


def alphabet_war(fight):
    left = {"w": 4, "p": 3, "b": 2, "s": 1}
    right = {"m": 4, "q": 3, "d": 2, "z": 1}
    result = [0, 0]
    for x in fight:
        result[0] += left.get(x) or 0
        result[1] += right.get(x) or 0
    return (
        "Left side wins!" if result[0] > result[1] else "Right side wins!" if result[0] < result[1] else "Let's fight again!"
    )
