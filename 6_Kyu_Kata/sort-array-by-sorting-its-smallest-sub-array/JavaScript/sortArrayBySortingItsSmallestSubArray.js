// [object Object] - Sort array by sorting its smallest sub-array  [ ID: 59aac10dd0a5ff951100002a  (sort-array-by-sorting-its-smallest-sub-array) ]
// URL: https://www.codewars.com/kata/59aac10dd0a5ff951100002a
// Category: ALGORITHMS  |  Tags: ALGORITHMS | SORTING
// *****************************************************************************
const range = (arr, direction) =>
    direction.map((dir) =>
      arr
        .map((v, i) => [v, i])
        .filter(([v, i]) => v !== dir[i])
        .reduce((a, [_, cI]) => [Math.min(cI, a[0]), Math.max(cI, a[1])], [Infinity, 0])
    )
  
  function findIndexOfSubArray(arr) {
    const asc = arr.slice().sort((a, b) => a - b)
    const des = asc.slice().reverse()
    let [[a0, a1], [d0, d1]] = range(arr, [asc, des])
    return a1 - (a0 = ~~a0) <= d1 - (d0 = ~~d0) ? [a0, a1] : [d0, d1]
  }
