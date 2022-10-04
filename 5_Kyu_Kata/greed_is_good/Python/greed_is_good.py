# 5 kyu - Greed is Good  [ ID: 5270d0d18625160ada0000e4  (greed-is-good) ]
# URL: https://www.codewars.com/kata/5270d0d18625160ada0000e4
# Category: NONE  |  Tags: ALGORITHMS
# ******************************************************************************
def score(roll):
      dice = {}
      triples = {6: 600, 5: 500, 4: 400, 3: 300, 2: 200, 1: 1000}
      singles = {1: 100, 5: 50}
      points = 0
      for each in roll:
          dice[each] = dice.get(each, 0) + 1
      for i in dice:
          if dice[i] >= 3:
              points += triples[i]
              dice[i] -= 3
          while dice.get(i) > 0:
              points += singles.get(i, 0)
              dice[i] -= 1
      return points
