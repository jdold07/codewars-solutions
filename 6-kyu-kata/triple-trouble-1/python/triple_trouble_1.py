# 6 kyu - Triple trouble  [ ID: 55d5434f269c0c3f1b000058  (triple-trouble-1) ]
# URL: https://www.codewars.com/kata/55d5434f269c0c3f1b000058
# Category: ALGORITHMS  |  Tags: ALGORITHMS
# ******************************************************************************
def triple_double(num1, num2):
    result = ""
    num1 = [x for x in str(num1)]
    num2 = [y for y in str(num2)]
    for i in range(len(num1) - 2):
        if num1[i] == num1[i + 1] == num1[i + 2]:
            result = num1[i]
            break
    if result:
        for i2 in range(len(num2) - 1):
            if result == num2[i2] == num2[i2 + 1]:
                return 1
    return 0
