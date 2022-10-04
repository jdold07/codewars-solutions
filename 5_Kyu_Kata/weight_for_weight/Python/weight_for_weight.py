# 5 kyu - Weight for weight  [ ID: 55c6126177c9441a570000cc  (weight-for-weight) ]
# URL: https://www.codewars.com/kata/55c6126177c9441a570000cc
# Category: NONE  |  Tags: ALGORITHMS
# ******************************************************************************
def order_weight(s):
    score = []
    for x in s.split():
        score.append(sum(int(y) for y in x))
    score_weight = sorted(zip(score, s.split()))
    return " ".join(y[1] for y in score_weight)
