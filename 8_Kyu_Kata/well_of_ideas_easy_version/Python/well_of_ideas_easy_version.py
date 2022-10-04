# 8 kyu - Well of Ideas - Easy Version  [ ID: 57f222ce69e09c3630000212  (well-of-ideas-easy-version) ]
# URL: https://www.codewars.com/kata/57f222ce69e09c3630000212
# Category: NONE  |  Tags: FUNDAMENTALS | ARRAYS | STRINGS | REFACTORING
# ******************************************************************************
def well(x):
      return "Fail!" if "good" not in x else "Publish!" if x.count("good") <= 2 else "I smell a series!"
