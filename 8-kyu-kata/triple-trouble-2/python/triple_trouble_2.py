# 8 kyu - Triple Trouble  [ ID: 5704aea738428f4d30000914  (triple-trouble-2) ]
# URL: https://www.codewars.com/kata/5704aea738428f4d30000914
# Category: GAMES  |  Tags: PUZZLES
# ******************************************************************************
def triple_trouble(one, two, three):
      result = ""
      for x in range(len(one)):
          result += one[x]
          result += two[x]
          result += three[x]
      return result
