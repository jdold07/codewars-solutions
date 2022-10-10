#+ =====================================================================================================================
#+
#+ 5 kyu - PaginationHelper  [ ID: 515bb423de843ea99400000a ] (paginationhelper)
#+ URL: https://www.codewars.com/kata/515bb423de843ea99400000a
#+ Category: ALGORITHMS  |  Tags: OBJECT-ORIENTED PROGRAMMING | ARRAYS | ALGORITHMS
#+
#+ =====================================================================================================================

from math import ceil
  
  
  class PaginationHelper:
  
      # The constructor takes in an array of items and a integer indicating
      # how many items fit within a single page
      def __init__(self, collection, items_per_page):
          self.collection = collection
          self.items_per_page = items_per_page
  
      # returns the number of items within the entire collection
      def item_count(self):
          return len(self.collection)
  
      # returns the number of pages
      def page_count(self):
          return ceil(self.item_count() / self.items_per_page)
  
      # returns the number of items on the current page. page_index is zero based
      # this method should return -1 for page_index values that are out of range
      def page_item_count(self, page_index):
          if page_index + 1 > self.page_count() or page_index < 0:
              return -1
          elif (page_index + 1) == self.page_count():
              return self.item_count() - (page_index * self.items_per_page)
          else:
              return self.items_per_page
  
      # determines what page an item is on. Zero based indexes.
      # this method should return -1 for item_index values that are out of range
      def page_index(self, item_index):
          print(item_index, self.item_count(), self.items_per_page, self.page_count())
          print((item_index + 1) // self.items_per_page)
          print(self.collection)
          if item_index + 1 > self.item_count() or item_index < 0:
              return -1
          return (item_index + 1) // self.items_per_page

# ======================================================================================================================
# ======================================================================================================================

from math import ceil
  
  
  class PaginationHelper:
  
      # The constructor takes in an array of items and a integer indicating
      # how many items fit within a single page
      def __init__(self, collection, items_per_page):
          self.collection = collection
          self.items_per_page = items_per_page
  
      # returns the number of items within the entire collection
      def item_count(self):
          return len(self.collection)
  
      # returns the number of pages
      def page_count(self):
          return ceil(self.item_count() / self.items_per_page)
  
      # returns the number of items on the current page. page_index is zero based
      # this method should return -1 for page_index values that are out of range
      def page_item_count(self, page_index):
          if page_index + 1 > self.page_count() or page_index < 0:
              return -1
          elif (page_index + 1) == self.page_count():
              return self.item_count() - (page_index * self.items_per_page)
          else:
              return self.items_per_page
  
      # determines what page an item is on. Zero based indexes.
      # this method should return -1 for item_index values that are out of range
      def page_index(self, item_index):
          if item_index + 1 > self.item_count() or item_index < 0:
              return -1
          return (item_index + 1) // self.items_per_page



# ======================================================================================================================
# ======================================================================================================================

from math import ceil
  
  
  class PaginationHelper:
  
      # The constructor takes in an array of items and a integer indicating
      # how many items fit within a single page
      def __init__(self, collection, items_per_page):
          self.collection = collection
          self.items_per_page = items_per_page
  
      # returns the number of items within the entire collection
      def item_count(self):
          return len(self.collection)
  
      # returns the number of pages
      def page_count(self):
          return ceil(self.item_count() / self.items_per_page)
  
      # returns the number of items on the current page. page_index is zero based
      # this method should return -1 for page_index values that are out of range
      def page_item_count(self, page_index):
          if page_index + 1 > self.page_count() or page_index < 0:
              return -1
          elif self.page_count() == 1:
              return self.item_count()
          elif (page_index + 1) == self.page_count():
              return self.item_count() - (page_index * self.items_per_page)
          else:
              return self.items_per_page
  
      # determines what page an item is on. Zero based indexes.
      # this method should return -1 for item_index values that are out of range
      def page_index(self, item_index):
          if item_index + 1 > self.item_count() or item_index < 0:
              return -1
          return (item_index + 1) // self.items_per_page


