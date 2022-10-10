#+ =====================================================================================================================
#+
#+ 7 kyu - Find the capitals  [ ID: 539ee3b6757843632d00026b ] (find-the-capitals-1)
#+ URL: https://www.codewars.com/kata/539ee3b6757843632d00026b
#+ Category: REFERENCE  |  Tags: STRINGS | ARRAYS | FUNDAMENTALS
#+
#+ =====================================================================================================================

import re
  def capitals(word):
      result = []
      for match in re.finditer("[A-Z]", word):
          result.append(match.start())
      return result
