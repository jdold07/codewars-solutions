#+ =====================================================================================================================
#+
#+ 6 kyu - Dashatize it  [ ID: 58223370aef9fc03fd000071 ] (dashatize-it)
#+ URL: https://www.codewars.com/kata/58223370aef9fc03fd000071
#+ Category: REFERENCE  |  Tags: STRINGS | ARRAYS | REGULAR EXPRESSIONS | FUNDAMENTALS
#+
#+ =====================================================================================================================

import re
  
  
  def dashatize(n):
      rgx = re.compile("(?<=[02468])(-)(?=[02468])")
      return (
          re.sub(rgx, "", "-".join(unit for unit in str(n))).strip("-")
          if isinstance(n, int)
          else "None"
      )
