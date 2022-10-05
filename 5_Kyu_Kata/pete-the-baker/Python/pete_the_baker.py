# [object Object] - Pete, the baker  [ ID: 525c65e51bf619685c000059  (pete-the-baker) ]
# URL: https://www.codewars.com/kata/525c65e51bf619685c000059
# Category: ALGORITHMS  |  Tags: ALGORITHMS
# ******************************************************************************
def cakes(recipe, available):
      return min([available[x] // recipe[x] 
                  if x in available.keys() 
                  else 0 
                  for x in recipe.keys()])
