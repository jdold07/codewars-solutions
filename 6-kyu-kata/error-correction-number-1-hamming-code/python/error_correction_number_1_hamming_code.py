# 6 kyu - Error correction #1 - Hamming Code  [ ID: 5ef9ca8b76be6d001d5e1c3e  (error-correction-number-1-hamming-code) ]
# URL: https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e
# Category: ALGORITHMS  |  Tags: ALGORITHMS | BITS
# ******************************************************************************
import re
  
  def encode(string):
      e1 = re.sub(".", (lambda y: ("0000000" + (bin(ord(y.group()))[2:]))[-8:]), string)
      return re.sub(".", lambda x: x.group() * 3, e1)
  
  def decode(bits):
      d1 = re.sub("...", lambda x: x.group()[0] if x.group()[0] in (x.group()[1], x.group()[2]) else x.group()[1], bits)
      return re.sub(".{8}", lambda y: chr(int(y.group(), base=2)), d1)
