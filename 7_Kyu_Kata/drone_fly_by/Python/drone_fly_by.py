# 7 kyu - Drone Fly-By  [ ID: 58356a94f8358058f30004b5  (drone-fly-by) ]
# URL: https://www.codewars.com/kata/58356a94f8358058f30004b5
# Category: NONE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
# ******************************************************************************
import re
  
  def fly_by(lamps, drone):
      return re.sub(r"^x{1," + f"{(x:=len(drone))}" + r"}", "o" * (len(lamps) if len(lamps) < x else x), lamps)
  
