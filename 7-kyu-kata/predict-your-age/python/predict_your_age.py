# 7 kyu - Predict your age!  [ ID: 5aff237c578a14752d0035ae  (predict-your-age) ]
# URL: https://www.codewars.com/kata/5aff237c578a14752d0035ae
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def predict_age(*args):
    return int(((sum(x * x for x in args)) ** 0.5) // 2)
