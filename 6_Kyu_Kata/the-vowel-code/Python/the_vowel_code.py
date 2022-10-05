# [object Object] - The Vowel Code  [ ID: 53697be005f803751e0015aa  (the-vowel-code) ]
# URL: https://www.codewars.com/kata/53697be005f803751e0015aa
# Category: REFERENCE  |  Tags: ARRAYS | STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
# ******************************************************************************
code_dict = {"a": "1", "e": "2", "i": "3", "o": "4", "u": "5"}
  
  
  def encode(st):
      return "".join(
          code_dict[letter] if letter in code_dict else letter for letter in st
      )
  
  
  def decode(st):
      return "".join(
          list(code_dict.keys())[list(code_dict.values()).index(num)]
          if num in list(code_dict.values())
          else num
          for num in st
      )
