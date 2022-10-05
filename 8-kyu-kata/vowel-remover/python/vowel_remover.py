# 8 kyu - Vowel remover  [ ID: 5547929140907378f9000039  (vowel-remover) ]
# URL: https://www.codewars.com/kata/5547929140907378f9000039
# Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
def shortcut(s):
      for x in {"a", "e", "i", "o", "u",}:
          s = s.replace(x, "")
      return s
