# 8 kyu - How good are you really?  [ ID: 5601409514fc93442500010b  (how-good-are-you-really) ]
# URL: https://www.codewars.com/kata/5601409514fc93442500010b
# Category: NONE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def better_than_average(class_points, your_points):
      return sum(class_points, your_points) / (len(class_points) + 1) < your_points
