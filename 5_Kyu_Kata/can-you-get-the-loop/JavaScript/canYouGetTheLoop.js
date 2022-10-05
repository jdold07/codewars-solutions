// [object Object] - Can you get the loop ?  [ ID: 52a89c2ea8ddc5547a000863  (can-you-get-the-loop) ]
// URL: https://www.codewars.com/kata/52a89c2ea8ddc5547a000863
// Category: ALGORITHMS  |  Tags: ALGORITHMS | LINKED LISTS | DATA STRUCTURES
// *****************************************************************************
function loop_size(node) {
    let x = node
    let position = 0
    let nodeMap = new Map()
    while (x !== null) {
      if (!nodeMap.has(x)) {
        nodeMap.set(x, position)
        position++
      } else {
        return position - nodeMap.get(x)
      }
      x = x.next
    }
    return 0
  }
