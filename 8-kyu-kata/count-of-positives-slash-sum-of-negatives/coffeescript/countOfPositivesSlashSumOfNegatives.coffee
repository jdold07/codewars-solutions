# 8 kyu - Count of positives / sum of negatives  [ ID: 576bb71bbbcf0951d5000044  (count-of-positives-slash-sum-of-negatives) ]
# URL: https://www.codewars.com/kata/576bb71bbbcf0951d5000044
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | LISTS
# ******************************************************************************
countPositivesSumNegatives = (arr) ->
  if arr != null && arr.length
    return [
      arr.filter((v) => v > 0).length
      arr
        .filter (v) -> v < 0
        .reduce ((a, b) => a + b), 0
    ]
  return []
