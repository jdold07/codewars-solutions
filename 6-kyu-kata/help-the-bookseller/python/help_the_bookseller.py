# 6 kyu - Help the bookseller !  [ ID: 54dc6f5a224c26032800005c  (help-the-bookseller) ]
# URL: https://www.codewars.com/kata/54dc6f5a224c26032800005c
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS
# ******************************************************************************
def stock_list(listOfArt, listOfCat):
      if listOfArt and listOfCat:
          result = []
          loc = {}
          for cat in listOfCat:
              loc[cat] = 0
          for i in range(len(listOfArt)):
              listOfArt[i] = listOfArt[i].split()[0], int(listOfArt[i].split()[1])
          for cat in listOfCat:
              for x, y in listOfArt:
                  if x[0][0] == cat:
                      loc[cat] += y
          for cat in listOfCat:
              result.append(f"({cat} : {str(loc[cat])})")
          return " - ".join(result)
      return ""
