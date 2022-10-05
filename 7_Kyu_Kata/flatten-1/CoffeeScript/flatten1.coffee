# [object Object] - Flatten  [ ID: 5250a89b1625e5decd000413  (flatten-1) ]
# URL: https://www.codewars.com/kata/5250a89b1625e5decd000413
# Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING | ARRAYS | FUNDAMENTALS
# ******************************************************************************
flatten = (array) -> [].concat array...
# ******************************************************************************
# ******************************************************************************
flatten = (array) -> array.reduce(((a, c) -> a.concat(c)), [])
  

