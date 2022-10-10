//+ ====================================================================================================================
//+
//+ 7 kyu - Remove All The Marked Elements of a List  [ ID: 563089b9b7be03472d00002b ] (remove-all-the-marked-elements-of-a-list)
//+ URL: https://www.codewars.com/kata/563089b9b7be03472d00002b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS | DATA STRUCTURES
//+
//+ ====================================================================================================================

Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((v) => !values_list.includes(v))
}

module.exports = Array.prototype
