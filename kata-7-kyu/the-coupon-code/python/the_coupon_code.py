#+ =====================================================================================================================
#+
#+ 7 kyu - The Coupon Code  [ ID: 539de388a540db7fec000642 ] (the-coupon-code)
#+ URL: https://www.codewars.com/kata/539de388a540db7fec000642
#+ Category: REFERENCE  |  Tags: DATE TIME | STRINGS | FUNDAMENTALS
#+
#+ =====================================================================================================================

from time import strptime
  
  def check_coupon(entered_code, correct_code, current_date, expiration_date):
      return (
          entered_code == correct_code
          and type(entered_code) == type(correct_code)
          and strptime(current_date, "%B %d, %Y")
          <= strptime(expiration_date, "%B %d, %Y"))
