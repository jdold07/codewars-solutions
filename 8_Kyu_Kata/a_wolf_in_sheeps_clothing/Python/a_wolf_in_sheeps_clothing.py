# 8 kyu - A wolf in sheep's clothing  [ ID: 5c8bfa44b9d1192e1ebd3d15  (a-wolf-in-sheeps-clothing) ]
# URL: https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
# Category: NONE  |  Tags: FUNDAMENTALS | ARRAYS
# ******************************************************************************
def warn_the_sheep(queue):
      wolf = queue.index("wolf")
      q = len(queue)-1
      return (f"Oi! Sheep number {q - wolf}! You are about to be eaten by a wolf!" if q != wolf else "Pls go away and stop eating my sheep")
