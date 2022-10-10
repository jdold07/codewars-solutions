//+ ====================================================================================================================
//+
//+ 6 kyu - Linked Lists - Length & Count  [ ID: 55beec7dd347078289000021 ] (linked-lists-length-and-count)
//+ URL: https://www.codewars.com/kata/55beec7dd347078289000021
//+ Category: REFERENCE  |  Tags: LINKED LISTS | DATA STRUCTURES | FUNDAMENTALS
//+
//+ ====================================================================================================================

function Node(data) {
  this.data = data
  this.next = null
}

function length(node, cnt = 0) {
  return node !== null ? length(node.next, ++cnt) : cnt
}

function count(node, data, cnt = 0) {
  return node !== null ? count(node.next, data, (cnt += node.data === data)) : cnt
}

module.exports = { Node, length, count }
