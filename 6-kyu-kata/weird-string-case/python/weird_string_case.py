# 6 kyu - WeIrD StRiNg CaSe  [ ID: 52b757663a95b11b3d00062d  (weird-string-case) ]
# URL: https://www.codewars.com/kata/52b757663a95b11b3d00062d
# Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
# ******************************************************************************
def to_weird_case(s):
      words = s.split()
      for index, word in enumerate(words):
          new_word = ""
          for i, c in enumerate(word):
              new_word += c.lower() if i % 2 else c.upper()
          words[index] = new_word
      return " ".join(words)
  
  
  # I'm certain there's a more elegant solution, but here it is!
