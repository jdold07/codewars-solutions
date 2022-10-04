# 6 kyu - Fractions class  [ ID: 572bbd7c72a38bd878000a73  (fractions-class) ]
# URL: https://www.codewars.com/kata/572bbd7c72a38bd878000a73
# Category: NONE  |  Tags: FUNDAMENTALS
# ******************************************************************************
class Fraction:
    def __init__(self, numerator, denominator):
        self.top = numerator
        self.bottom = denominator

    # Equality test
    def __eq__(self, other):
        first_num = self.top * other.bottom
        second_num = other.top * self.bottom
        return first_num == second_num

    # Find largest common factor
    def lcf(self, a, b):
        while b:
            a, b = b, a % b
        return a

    # Add fractions
    def __add__(self, other):
        add_Numerator = self.top * other.bottom + other.top * self.bottom
        add_Denominator = self.bottom * other.bottom
        l_C_F = self.lcf(add_Numerator, add_Denominator)
        common_Denominator = add_Denominator // l_C_F
        common_Numerator = add_Numerator // l_C_F
        return Fraction(common_Numerator, common_Denominator)

    # Print string
    def __str__(self):
        return f"{self.top}/{self.bottom}"
