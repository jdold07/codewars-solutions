# 6 kyu - Convert integer to Whitespace format  [ ID: 55b350026cc02ac1a7000032  (convert-integer-to-whitespace-format) ]
# URL: https://www.codewars.com/kata/55b350026cc02ac1a7000032
# Category: REFERENCE  |  Tags: BINARY | FUNDAMENTALS
# ******************************************************************************
import re
  
  def whitespace_number(n):
      return (" " if n > 0 else "") + (
          re.sub("(0b)*.", lambda v: (" " if str(v.group(0)) == "0" or str(v.group(0)) == "0b0" else "\t"), bin(n)) + "\n")
# ******************************************************************************
# ******************************************************************************
import re
  
  
  def whitespace_number(n):
      return ("" if n <= 0 else " ") + (re.sub("(0b)*.", lambda v: (" " if v.group(0) == ("0" or "0b0") else "\t"), bin(n)[2:]) + "\n")

