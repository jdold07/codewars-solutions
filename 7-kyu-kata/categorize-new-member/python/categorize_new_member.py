# 7 kyu - Categorize New Member  [ ID: 5502c9e7b3216ec63c0001aa  (categorize-new-member) ]
# URL: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def open_or_senior(data):
    return ["Senior" if a >= 55 and h > 7 else "Open" for a, h in data]
