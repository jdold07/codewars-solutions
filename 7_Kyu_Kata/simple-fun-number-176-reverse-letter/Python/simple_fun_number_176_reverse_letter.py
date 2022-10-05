# [object Object] - Simple Fun #176: Reverse Letter  [ ID: 58b8c94b7df3f116eb00005b  (simple-fun-number-176-reverse-letter) ]
# URL: https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import re
  
  def reverse_letter(string):
      return "".join((re.sub("[^a-z]", "", string))[::-1])
