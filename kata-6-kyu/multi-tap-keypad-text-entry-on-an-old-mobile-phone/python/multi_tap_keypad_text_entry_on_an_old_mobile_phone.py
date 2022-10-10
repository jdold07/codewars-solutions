# + =====================================================================================================================
# +
# + 6 kyu - Multi-tap Keypad Text Entry on an Old Mobile Phone  [ ID: 54a2e93b22d236498400134b ] (multi-tap-keypad-text-entry-on-an-old-mobile-phone)
# + URL: https://www.codewars.com/kata/54a2e93b22d236498400134b
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================


def presses(phrase):
    btns = ["1", "ABC2", "DEF3", "GHI4", "JKL5", "MNO6", "PQRS7", "TUV8", "WXYZ9", "*", " 0", "#"]
    phrase = phrase.upper()
    key_presses = 0
    for btn in btns:
        for char in phrase:
            if char in btn:
                key_presses += btn.index(char) + 1
    return key_presses
