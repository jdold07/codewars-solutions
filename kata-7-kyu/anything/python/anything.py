#+ =====================================================================================================================
#+
#+ 7 kyu - Anything  [ ID: 557d9e4d155e2dbf050000aa ] (anything)
#+ URL: https://www.codewars.com/kata/557d9e4d155e2dbf050000aa
#+ Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS
#+
#+ =====================================================================================================================

class Anything_True():
      def __eq__(self, other):
          return True
      def __ne__(self, other):
          return True
      def __gt__(self, other): 
          return True
      def __ge__(self, other):
          return True
      def __lt__(self, other):
          return True
      def __le__(self, other):
          return True
      
  def anything(thing):
      return Anything_True()
