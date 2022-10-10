# + =====================================================================================================================
# +
# + 7 kyu - Bingo ( Or Not )  [ ID: 5a1ee4dfffe75f0fcb000145 ] (bingo-or-not)
# + URL: https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145
# + Category: REFERENCE  |  Tags: GAMES | ARRAYS | FUNDAMENTALS
# +
# + =====================================================================================================================


def bingo(array):
    return ["WIN", "LOSE"][any(x not in map(lambda x: chr(x + 64), array) for x in ["B", "I", "N", "G", "O"])]
