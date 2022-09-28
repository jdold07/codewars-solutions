//* My submitted solution
func solution(_ num: Int) -> Int {
  var sum: Int = 0
  if num > 2 {
    for (i) in Array(0...(num-1)) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i
      }
    }
  }
  return sum
}