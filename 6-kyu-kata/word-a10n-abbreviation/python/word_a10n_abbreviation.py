# 6 kyu - Word a10n (abbreviation)  [ ID: 5375f921003bf62192000746  (word-a10n-abbreviation) ]
# URL: https://www.codewars.com/kata/5375f921003bf62192000746
# Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
import re
  
  
  def abbreviate(s):
      a8e = re.compile("(?<=[a-zA-Z])([a-zA-Z]{2,})(?=[a-zA-Z])")
      return re.sub(a8e, lambda x: str(len(x.group(0))), s)
