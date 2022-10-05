# 6 kyu - Valid Phone Number  [ ID: 525f47c79f2f25a4db000025  (valid-phone-number) ]
# URL: https://www.codewars.com/kata/525f47c79f2f25a4db000025
# Category: ALGORITHMS  |  Tags: REGULAR EXPRESSIONS | ALGORITHMS
# ******************************************************************************
import re
  
  
  def valid_phone_number(phone_number):
      return bool(re.match("^(\([0-9]{3}\)\s[0-9]{3}-[0-9]{4})$", phone_number))
  
