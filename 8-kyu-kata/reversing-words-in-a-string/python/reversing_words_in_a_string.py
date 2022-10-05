# 8 kyu - Reversing Words in a String  [ ID: 57a55c8b72292d057b000594  (reversing-words-in-a-string) ]
# URL: https://www.codewars.com/kata/57a55c8b72292d057b000594
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
# ******************************************************************************
def reverse(st):
    return " ".join(st.split()[::-1])
