# 8 kyu - Grasshopper - Debug  [ ID: 55cb854deb36f11f130000e1  (grasshopper-debug) ]
# URL: https://www.codewars.com/kata/55cb854deb36f11f130000e1
# Category: NONE  |  Tags: DEBUGGING
# ******************************************************************************
def weather_info(fahrenheit):
      c = (fahrenheit - 32) * (5/9)
      if (c < 0):
          return (f"{c} is freezing temperature")
      else:
          return (f"{c} is above freezing temperature")
      
  def convert_to_celsius(temperature):
      celsius = (temperature - 32) * (5/9)
      return celsius
