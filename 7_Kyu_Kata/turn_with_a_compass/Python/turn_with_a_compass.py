# 7 kyu - Turn with a Compass  [ ID: 61a8c3a9e5a7b9004a48ccc2  (turn-with-a-compass) ]
# URL: https://www.codewars.com/kata/61a8c3a9e5a7b9004a48ccc2
# Category: NONE  |  Tags: ALGORITHMS
# ******************************************************************************
def direction(facing, turn):
      compass = {"N": 0, "NE": 45, "E": 90, "SE": 135, "S": 180, "SW": 225, "W": 270, "NW": 315}
      heading = compass[facing] + turn
      while heading >= 360:
          heading -= 360
      while heading < 0:
          heading += 360
      return [key for key, val in compass.items() if val == heading][0]
