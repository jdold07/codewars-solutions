# [object Object] - 101 Dalmatians - squash the bugs, not the dogs!  [ ID: 56f6919a6b88de18ff000b36  (101-dalmatians-squash-the-bugs-not-the-dogs) ]
# URL: https://www.codewars.com/kata/56f6919a6b88de18ff000b36
# Category: BUG_FIXES  |  Tags: DEBUGGING | FUNDAMENTALS
# ******************************************************************************
def how_many_dalmatians(n):
      dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"]
      return dogs[3] if n == 101 else dogs[0] if n <= 10 else dogs[1] if n <= 50 else dogs[2]
