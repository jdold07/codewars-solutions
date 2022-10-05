# 6 kyu - Buying a car  [ ID: 554a44516729e4d80b000012  (buying-a-car) ]
# URL: https://www.codewars.com/kata/554a44516729e4d80b000012
# Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
# ******************************************************************************
def nbMonths(old_car, new_car, savings_per_month, depreciation_rate):
    surplus = old_car - new_car
    savings = 0
    months = 0
    while surplus < 0:
        months += 1
        if not months % 2:
            depreciation_rate += 0.5
        new_car *= 1 - depreciation_rate / 100
        old_car *= 1 - depreciation_rate / 100
        savings += savings_per_month
        surplus = old_car + savings - new_car
    return [months, round(surplus)]
