# 7 kyu - Anagram Detection  [ ID: 529eef7a9194e0cbc1000255  (anagram-detection) ]
# URL: https://www.codewars.com/kata/529eef7a9194e0cbc1000255
# Category: NONE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
def is_anagram(test, original):
      return "".join(sorted(test.lower())) == "".join(sorted(original.lower()))
