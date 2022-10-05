# 7 kyu - Find the vowels  [ ID: 5680781b6b7c2be860000036  (find-the-vowels) ]
# URL: https://www.codewars.com/kata/5680781b6b7c2be860000036
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def vowel_indices(word):
      return [(indx + 1) for indx, letter in enumerate(word.lower()) if letter in "aeiouy"]
