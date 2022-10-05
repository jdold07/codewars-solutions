# 5 kyu - RGB To Hex Conversion  [ ID: 513e08acc600c94f01000001  (rgb-to-hex-conversion) ]
# URL: https://www.codewars.com/kata/513e08acc600c94f01000001
# Category: ALGORITHMS  |  Tags: ALGORITHMS
# ******************************************************************************
rgb = (r, g, b) ->
  toHex = (num) ->
    return Math.min 255, Math.max 0, num
      .toString 16
      .toUpperCase()
      .padStart 2, "0"
  return toHex(r) + toHex(g) + toHex b
