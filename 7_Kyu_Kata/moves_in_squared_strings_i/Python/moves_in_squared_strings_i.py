# 7 kyu - Moves in squared strings (I)  [ ID: 56dbe0e313c2f63be4000b25  (moves-in-squared-strings-i) ]
# URL: https://www.codewars.com/kata/56dbe0e313c2f63be4000b25
# Category: NONE  |  Tags: FUNDAMENTALS | ALGORITHMS | STRINGS
# ******************************************************************************
def vert_mirror(strng):
          return "\n".join("".join(x[::-1]) for x in strng.split("\n"))
  
  def hor_mirror(strng):
          return "\n".join(strng.split("\n")[::-1])
  
  def oper(fct, s):
      return fct(s)
