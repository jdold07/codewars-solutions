// 6 kyu - Who has the most money?  [ ID: 528d36d7cc451cd7e4000339  (who-has-the-most-money) ]
// URL: https://www.codewars.com/kata/528d36d7cc451cd7e4000339
// Category: undefined  |  Tags: OBJECT-ORIENTED PROGRAMMING | ALGORITHMS
// *****************************************************************************
// Create an array of only required info and access from that
  const mostMoney = (students) => (x = students
     .map((v) => [v.fives * 5 + v.tens * 10 + v.twenties * 20, v.name]).sort((a, b) => b[0] - a[0]))
     .every(([$, _]) => $ === Math.max(...x.map(([$, _]) => $))) && x.length > 1 ? "all": x[0][1]
  
  // Create new property of student object and access required info as necessary from student object
  // const mostMoney = (students) => (x = students
  //     .map((v) => ({ ...v, ["$"]: v.fives * 5 + v.tens * 10 + v.twenties * 20 })).sort((a, b) => b.$ - a.$))
  //     .every((v) => v.$ === Math.max(...x.map((v) => v.$))) && x.length > 1 ? "all" : x[0].name
