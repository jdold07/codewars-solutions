#+ =====================================================================================================================
#+
#+ 8 kyu - The Wide-Mouthed frog!   [ ID: 57ec8bd8f670e9a47a000f89 ] (the-wide-mouthed-frog)
#+ URL: https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89
#+ Category: REFERENCE  |  Tags: STRINGS | LOGIC | FUNDAMENTALS
#+
#+ =====================================================================================================================

def mouth_size(animal):
      return ["wide", "small"][animal.lower() == "alligator"]
