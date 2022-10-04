// 5 kyu - Common Denominators  [ ID: 54d7660d2daf68c619000d95  (common-denominators) ]
// URL: https://www.codewars.com/kata/54d7660d2daf68c619000d95
// Category: undefined  |  Tags: FUNDAMENTALS | ALGORITHMS | MATHEMATICS
// *****************************************************************************
function convertFrac(lst) {
    const dList = [...lst.map(([_, vD]) => vD)]
    const getLowCD = () => {
      const lowCM = (x, y) => (x * y) / lrgCF(x, y)
      const lrgCF = (x, y) => (x ? lrgCF(y % x, x) : y)
      return dList.reduce((a, c) => lowCM(a, c), Math.min(...dList))
    }
    const lowCD = getLowCD()
    return lst.reduce((a, [cN, cD]) => a + `(${cN * (lowCD / cD)},${lowCD})`, "")
  }
