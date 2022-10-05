# 6 kyu - The Enigma Machine - Part 1: The Plugboard  [ ID: 5523b97ac8f5025c45000900  (the-enigma-machine-part-1-the-plugboard) ]
# URL: https://www.codewars.com/kata/5523b97ac8f5025c45000900
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS
# ******************************************************************************
class Plugboard(object):
    def __init__(self, wires=""):
        """wires: This is the mapping of pairs of characters"""
        if len(set(wires)) != len(wires) or len(wires) > 20 or len(wires) % 2:
            raise ValueError("Not a valid input")

        self.dict = {
            **{a: b for a, b in zip(wires[0:20:2], wires[1:21:2])},
            **{b: a for a, b in zip(wires[0:20:2], wires[1:21:2])},
        }

    def process(self, c):
        """c: The single character to process"""
        try:
            return self.dict[c]
        except KeyError:
            return c
