# 6 kyu - Binary to Text (ASCII) Conversion  [ ID: 5583d268479559400d000064  (binary-to-text-ascii-conversion) ]
# URL: https://www.codewars.com/kata/5583d268479559400d000064
# Category: REFERENCE  |  Tags: BINARY | STRINGS | FUNDAMENTALS
# ******************************************************************************
def binary_to_string(binary):
      return "".join([chr(int(x, base=2)) for x in (binary[i : i + 8] for i in range(0, len(binary), 8))])
