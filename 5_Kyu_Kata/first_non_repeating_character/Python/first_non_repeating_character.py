# 5 kyu - First non-repeating character  [ ID: 52bc74d4ac05d0945d00054e  (first-non-repeating-character) ]
# URL: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
# Category: NONE  |  Tags: STRINGS | ALGORITHMS
# ******************************************************************************
def first_non_repeating_letter(string):
    for letter in string:
        if string.lower().count(letter.lower()) == 1:
            return letter
    return ""
