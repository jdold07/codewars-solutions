# 8 kyu - Drink about  [ ID: 56170e844da7c6f647000063  (drink-about) ]
# URL: https://www.codewars.com/kata/56170e844da7c6f647000063
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def people_with_age_drink(age):
      dict = ["toddy", "coke", "beer", "whisky"]
      return f"drink {dict[0 if age<14 else 1 if age<18 else 2 if age<21 else 3]}"
  
