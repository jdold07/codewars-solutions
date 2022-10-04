# 5 kyu - Convert A Hex String To RGB  [ ID: 5282b48bb70058e4c4000fa7  (convert-a-hex-string-to-rgb) ]
# URL: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
# Category: NONE  |  Tags: PARSING | STRINGS | ALGORITHMS
# ******************************************************************************
def hex_string_to_RGB(hex_string):
    [r, g, b] = [int(x, base=16) for x in (hex_string[i : i + 2] for i in range(1, 6, 2))]
    return {"r": r, "g": g, "b": b}
