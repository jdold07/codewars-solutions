// 6 kyu - Find The Parity Outlier  [ ID: 5526fc09a1bbd946250002dc  (find-the-parity-outlier) ]
// URL: https://www.codewars.com/kata/5526fc09a1bbd946250002dc
// Category: ALGORITHMS  |  Tags: ALGORITHMS
// *****************************************************************************
function findOutlier(integers){
      let test = 0
      for (let i = 1; i <=3; i++){
          if (integers[i-1] % 2 === 0) test++
      }
      if (test >= 2) return integers.find(x => x % 2 !== 0)
      else return integers.find(y => y % 2 === 0)
  }
