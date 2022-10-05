# 6 kyu - Give me a Diamond  [ ID: 5503013e34137eeeaa001648  (give-me-a-diamond) ]
# URL: https://www.codewars.com/kata/5503013e34137eeeaa001648
# Category: REFERENCE  |  Tags: STRINGS | ASCII ART | FUNDAMENTALS
# ******************************************************************************
def diamond(n):
    if n < 1 or not n % 2:
        return None

    result = ""
    middle = int((n - 1) / 2)
    space_print = middle + 1
    star_print = -1

    for x in range((middle + 1)):
        star_print += 2
        space_print -= 1
        result += f"{' '*space_print}{'*'*star_print}\n"

    for x in range(middle, 0, -1):
        star_print -= 2
        space_print += 1
        result += f"{' '*space_print}{'*'*star_print}\n"

    return result
