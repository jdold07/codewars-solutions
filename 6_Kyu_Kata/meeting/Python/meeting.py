# [object Object] - Meeting  [ ID: 59df2f8f08c6cec835000012  (meeting) ]
# URL: https://www.codewars.com/kata/59df2f8f08c6cec835000012
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def meeting(s):
      names = s.upper().split(";")
      for index, name in enumerate(names):
          names[index] = f"({', '.join(name.split(':')[::-1])})"
      return "".join(sorted(names))
