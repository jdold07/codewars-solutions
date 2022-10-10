#+ =====================================================================================================================
#+
#+ 7 kyu - Name That Number!  [ ID: 579ba41ce298a73aaa000255 ] (name-that-number)
#+ URL: https://www.codewars.com/kata/579ba41ce298a73aaa000255
#+ Category: REFERENCE  |  Tags: FUNDAMENTALS
#+
#+ =====================================================================================================================

def name_that_number(n):
      word = (f"{tens[n // 10]} {ones[n % 10]}" if n not in unique else unique[n]).strip()
      return "".join(word.split(" ")[::-1]) if word.startswith("teen") else "zero" if not len(word) else word
  
  ones = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 0: ""}
  tens = {1: "teen", 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety", 0: ""}
  unique = {10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 15: "fifteen", 18: "eighteen"}
