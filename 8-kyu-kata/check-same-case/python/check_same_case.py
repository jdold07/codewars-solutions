# 8 kyu - Check same case  [ ID: 5dd462a573ee6d0014ce715b  (check-same-case) ]
# URL: https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def same_case(a, b):
    print(a, b)
    if a.islower() and b.islower():
        return 1
    if a.isupper() and b.isupper():
        return 1
    if a.isalpha() and b.isalpha():
        return 0
    else:
        return -1
