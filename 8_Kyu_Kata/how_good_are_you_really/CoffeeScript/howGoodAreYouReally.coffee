# 8 kyu - How good are you really?  [ ID: 5601409514fc93442500010b  (how-good-are-you-really) ]
# URL: https://www.codewars.com/kata/5601409514fc93442500010b
# Category: NONE  |  Tags: FUNDAMENTALS
# ******************************************************************************
betterThanAverage = (classPoints, yourPoints) -> 
    classPoints.reduce(((a,c) => a + c), yourPoints) / ++classPoints.length < yourPoints
# ******************************************************************************
# ******************************************************************************
betterThanAverage = (classPoints, yourPoints) -> 
    classPoints.concat(yourPoints).reduce((a,c) -> a + c) / ++classPoints.length < yourPoints

