#+ =====================================================================================================================
#+
#+ 6 kyu - Vault experience (3): Populate the vaults  [ ID: 57adadd36b34faea6b00031b ] (vault-experience-3-populate-the-vaults)
#+ URL: https://www.codewars.com/kata/57adadd36b34faea6b00031b
#+ Category: REFERENCE  |  Tags: FUNDAMENTALS
#+
#+ =====================================================================================================================

def populate_my_vault(dwellers_count):
      regular_females_count = sum(divmod(dwellers_count, 2))
      regular_males_count = dwellers_count - regular_females_count
      overseers_count = 2 if dwellers_count > 50 else 1 if dwellers_count else 0
      regular_females_count -= 1 if dwellers_count > 50 or dwellers_count == 1 else 0
      if dwellers_count > 1:
          regular_males_count -= 1
      return (overseers_count, regular_females_count, regular_males_count)
  

# ======================================================================================================================
# ======================================================================================================================

from math import ceil
  
  
  def populate_my_vault(dwellers_count):
      regular_females_count = ceil(dwellers_count / 2)
      regular_males_count = dwellers_count - regular_females_count
      overseers_count = 2 if dwellers_count > 50 else 1 if dwellers_count else 0
      if dwellers_count > 1:
          regular_males_count -= 1
      regular_females_count -= 1 if dwellers_count > 50 or dwellers_count == 1 else 0
      return (overseers_count, regular_females_count, regular_males_count)


