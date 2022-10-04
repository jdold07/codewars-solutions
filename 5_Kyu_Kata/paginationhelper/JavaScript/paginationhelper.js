// 5 kyu - PaginationHelper  [ ID: 515bb423de843ea99400000a  (paginationhelper) ]
// URL: https://www.codewars.com/kata/515bb423de843ea99400000a
// Category: undefined  |  Tags: OBJECT-ORIENTED PROGRAMMING | ARRAYS | ALGORITHMS
// *****************************************************************************
class PaginationHelper {
    constructor(collection, itemsPerPage) {
      this.collection = collection
      this.itemsPerPage = itemsPerPage
    }
    // returns the number of items within the entire collection
    itemCount() {
      return this.collection.length
    }
    // returns the number of pages
    pageCount() {
      return Math.ceil(this.itemCount() / this.itemsPerPage)
    }
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    pageItemCount(page) {
      if (page >= this.pageCount() || page < 0) return -1
      return page === this.pageCount() - 1 ? this.itemCount() - this.itemsPerPage * page : this.itemsPerPage
    }
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    pageIndex(item) {
      if (item >= this.itemCount() || item < 0) return -1
      return Math.floor(item / this.itemsPerPage)
    }
  }
