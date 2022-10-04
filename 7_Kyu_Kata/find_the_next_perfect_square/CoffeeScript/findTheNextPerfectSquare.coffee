# 7 kyu - Find the next perfect square!  [ ID: 56269eb78ad2e4ced1000013  (find-the-next-perfect-square) ]
# URL: https://www.codewars.com/kata/56269eb78ad2e4ced1000013
# Category: NONE  |  Tags: ALGEBRA | FUNDAMENTALS
# ******************************************************************************
findNextSquare = (sq) ->
  if sq ** 0.5 % 1 then -1 else (sq ** 0.5 + 1) ** 2
