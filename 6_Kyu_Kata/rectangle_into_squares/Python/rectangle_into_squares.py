# 6 kyu - Rectangle into Squares  [ ID: 55466989aeecab5aac00003e  (rectangle-into-squares) ]
# URL: https://www.codewars.com/kata/55466989aeecab5aac00003e
# Category: NONE  |  Tags: FUNDAMENTALS | GEOMETRY | PUZZLES
# ******************************************************************************
def sqInRect(lng, wdth):
    result = None
    if lng != wdth:
        lng, wdth = max(lng, wdth), min(lng, wdth)
        result = []
        while lng > 0 and wdth > 0:
            if lng >= wdth:
                result.append(wdth)
                lng -= wdth
            else:
                result.append(lng)
                wdth -= lng
    return result
