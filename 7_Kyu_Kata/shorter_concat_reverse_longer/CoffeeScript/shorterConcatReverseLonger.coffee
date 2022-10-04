# 7 kyu - shorter concat [reverse longer]  [ ID: 54557d61126a00423b000a45  (shorter-concat-reverse-longer) ]
# URL: https://www.codewars.com/kata/54557d61126a00423b000a45
# Category: NONE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
shorter_reverse_longer = (a, b) ->
  if (!a && b) || a.length < b.length
    a +
      b
        .split ""
        .reverse()
        .join("") +
      a
  else if (!b && a) || a.length >= b.length
    b +
      a
        .split ""
        .reverse()
        .join("") +
      b
