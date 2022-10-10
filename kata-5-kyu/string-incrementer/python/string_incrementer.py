#+ =====================================================================================================================
#+
#+ 5 kyu - String incrementer  [ ID: 54a91a4883a7de5d7800009c ] (string-incrementer)
#+ URL: https://www.codewars.com/kata/54a91a4883a7de5d7800009c
#+ Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | STRINGS
#+
#+ =====================================================================================================================

import re
  
  
  def increment_string(strng):
      extract_s = re.match("^(.*?)(\d*)$", strng).group(1)
      extract_n = re.match("^(.*?)(\d*)$", strng).group(2)
      new_n = 1 if extract_n.lstrip("0") == "" else int((extract_n.lstrip("0"))) + 1
      return extract_s + str(new_n).zfill(len(extract_n))
