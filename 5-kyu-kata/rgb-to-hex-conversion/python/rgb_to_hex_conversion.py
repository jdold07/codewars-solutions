# 5 kyu - RGB To Hex Conversion  [ ID: 513e08acc600c94f01000001  (rgb-to-hex-conversion) ]
# URL: https://www.codewars.com/kata/513e08acc600c94f01000001
# Category: ALGORITHMS  |  Tags: ALGORITHMS
# ******************************************************************************
def rgb(r, g, b):
      def toHex(num):
          if num < 0: num = 0
          if num > 255: num = 255
          return hex(num)[2:].upper().rjust(2, "0")
  
      return toHex(r) + toHex(g) + toHex(b)
