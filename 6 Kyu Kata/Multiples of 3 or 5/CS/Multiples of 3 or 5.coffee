#* My submitted solution
solution = (n) ->
  sum = i = 0
  while i < n - 1
    i++
    if (i % 3) == 0 || (i % 5) == 0
      sum += i
  sum

#* Solution from Kata test case - included for reference
sol = (number) -> Array.from(length: number).reduce ((a, _, i) -> a + (if (i % 3) == 0 || (i % 5) == 0 then i else 0)), 0

console.log solution(10) == 23, "Expected 23, got " + solution 10
console.log solution(20) == 78, "Expected 78, got " + solution 20
console.log solution(200) == 9168, "Expected 9168, got " + solution 200
console.log solution(0) == 0, "Expected 0, got " + solution 0
console.log solution(1) == 0, "Expected 0, got " + solution 1
