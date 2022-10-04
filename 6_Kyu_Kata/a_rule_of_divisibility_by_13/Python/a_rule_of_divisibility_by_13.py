# 6 kyu - A Rule of Divisibility by 13  [ ID: 564057bc348c7200bd0000ff  (a-rule-of-divisibility-by-13) ]
# URL: https://www.codewars.com/kata/564057bc348c7200bd0000ff
# Category: NONE  |  Tags: FUNDAMENTALS | ALGORITHMS | MATHEMATICS
# ******************************************************************************
def thirt(n):
    pattern = [1, 10, 9, 12, 3, 4]
    sum = 0

    while True:
        current_sum = 0
        for index, digit in enumerate(str(n)[::-1]):
            current_index = index % len(pattern)
            current_sum += int(digit) * pattern[current_index]

        if sum == current_sum:
            return sum

        sum = current_sum
        n = current_sum
