//+ ====================================================================================================================
//+
//+ 5 kyu - Can you get the loop ?  [ ID: 52a89c2ea8ddc5547a000863 ] (can-you-get-the-loop)
//+ URL: https://www.codewars.com/kata/52a89c2ea8ddc5547a000863
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS | LINKED LISTS | DATA STRUCTURES
//+
//+ ====================================================================================================================

import { expect } from "vitest"
const { loop_size } = require("./canYouGetTheLoop")

describe("Tests", () => {
  it("test", () => {
    let list = create_chain(0, 1)
    let result = loop_size(list)
    if (result != 1) {
      console.log("Expected 1 got " + result)
    }
    expect(result == 1)

    list = create_chain(8778, 23)
    result = loop_size(list)
    if (result != 23) {
      console.log("Expected 23 got " + result)
    }
    expect(loop_size(list) == 23)

    list = create_chain(23, 8778)
    result = loop_size(list)
    if (result != 8778) {
      console.log("Expected 8778 got " + result)
    }
    expect(loop_size(list) == 8778)

    for (let i = 0; i < 2; i++) {
      const a = Math.floor(Math.random() * 999) + 9000
      const b = Math.floor(Math.random() * 999) + 9000
      list = create_chain(a, b)
      result = loop_size(list)
      if (result != b) {
        console.log("Expected " + b + " got " + result)
      }
      expect(loop_size(list) === b)
    }
  })
})

//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

function Node() {
  this.next
  this.getNext = function () {
    return this.next
    // code
  }
  this.setNext = function (next) {
    this.next = next
  }
}
function create_chain(tail_size, loop_size) {
  let prev_node = new Node()
  const start = prev_node
  start.setNext(start)
  if (loop_size == 1) {
    return start
  }
  for (let i = 1; i <= tail_size; i++) {
    prev_node.setNext(new Node())
    prev_node = prev_node.getNext()
  }
  const end_loop = prev_node
  for (let i = 1; i < loop_size; i++) {
    prev_node.setNext(new Node())
    prev_node = prev_node.getNext()
  }
  prev_node.setNext(end_loop)
  return start
}
