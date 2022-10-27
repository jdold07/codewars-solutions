# + ====================================================================================================================
# +
# + 7 kyu - Dictionary from two lists  [ ID: 5533c2a50c4fea6832000101 ] (dictionary-from-two-lists)
# + URL: https://www.codewars.com/kata/5533c2a50c4fea6832000101
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + ====================================================================================================================


def createDict(keys, values):
    while len(keys) > len(values):
        values.append(None)
    return dict(zip(keys, values))
