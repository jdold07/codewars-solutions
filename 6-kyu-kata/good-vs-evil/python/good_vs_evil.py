# 6 kyu - Good vs Evil  [ ID: 52761ee4cffbc69732000738  (good-vs-evil) ]
# URL: https://www.codewars.com/kata/52761ee4cffbc69732000738
# Category: ALGORITHMS  |  Tags: ALGORITHMS
# ******************************************************************************
def good_vs_evil(good, evil):
    good_worth = [1, 2, 3, 3, 4, 10]
    evil_worth = [1, 2, 2, 2, 3, 5, 10]
    good = [int(good.split()[g]) for g in range(len(good.split()))]
    evil = [int(evil.split()[e]) for e in range(len(evil.split()))]
    good_total = sum([good[x] * good_worth[x] for x in range(len(good))])
    evil_total = sum([evil[y] * evil_worth[y] for y in range(len(evil))])
    battle_result = good_total - evil_total
    return (
        "Battle Result: Good triumphs over Evil"
        if battle_result > 0
        else "Battle Result: Evil eradicates all trace of Good"
        if battle_result < 0
        else "Battle Result: No victor on this battle field"
    )
