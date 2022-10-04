# 8 kyu - Is it a palindrome?  [ ID: 57a1fd2ce298a731b20006a4  (is-it-a-palindrome) ]
# URL: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
# Category: NONE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def is_palindrome(s):
      return s.lower() == s[::-1].lower()
