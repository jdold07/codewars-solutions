# 8 kyu - Convert a string to an array  [ ID: 57e76bc428d6fbc2d500036d  (convert-a-string-to-an-array) ]
# URL: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
# Category: NONE  |  Tags: ARRAYS | STRINGS | FUNDAMENTALS
# ******************************************************************************
def string_to_array(s):
      return s.split() if len(s) != 0 else [""]
