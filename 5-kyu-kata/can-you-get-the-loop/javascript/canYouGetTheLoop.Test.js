// 5 kyu - Can you get the loop ?  [ ID: 52a89c2ea8ddc5547a000863  (can-you-get-the-loop) ]
// URL: https://www.codewars.com/kata/52a89c2ea8ddc5547a000863
// Category: ALGORITHMS  |  Tags: ALGORITHMS | LINKED LISTS | DATA STRUCTURES
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
    var list = create_chain(0, 1)
    var result = loop_size(list)
    if (result != 1) {
      console.log("Expected 1 got " + result)
    }
    Test.expect(result == 1)
    list = create_chain(8778, 23)
    result = loop_size(list)
    if (result != 23) {
      console.log("Expected 23 got " + result)
    }
    Test.expect(loop_size(list) == 23)
    list = create_chain(23, 8778)
    result = loop_size(list)
    if (result != 8778) {
      console.log("Expected 8778 got " + result)
    }
    Test.expect(loop_size(list) == 8778)
    for (i = 0; i < 2; i++) {
      var a = Math.floor(Math.random() * 999) + 9000
      var b = Math.floor(Math.random() * 999) + 9000
      list = create_chain(a, b)
      result = loop_size(list)
      if (result != b) {
        console.log("Expected " + b + " got " + result)
      }
      Test.expect(loop_size(list) == b)
    }
  })
})
