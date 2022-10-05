# 6 kyu - Playing with passphrases  [ ID: 559536379512a64472000053  (playing-with-passphrases) ]
# URL: https://www.codewars.com/kata/559536379512a64472000053
# Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
# ******************************************************************************
def play_pass(s, n):
      s = s.upper()
      result = ""
      for i, x in enumerate(s):
          if x.isalpha():
              x = chr(ord(x) + n - 26) if ord(x) + n > 90 else chr(ord(x) + n)
              result += x.lower() if i % 2 else x
          elif x.isdigit():
              result += f"{9 - int(x)}"
          else:
              result += x
      return result[::-1]
