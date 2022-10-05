// 8 kyu - Is your period late?  [ ID: 578a8a01e9fd1549e50001f1  (is-your-period-late) ]
// URL: https://www.codewars.com/kata/578a8a01e9fd1549e50001f1
// Category: REFERENCE  |  Tags: FUNDAMENTALS | DATE TIME
// *****************************************************************************
Test.assertEquals(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35), false)
Test.assertEquals(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28), true)
Test.assertEquals(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35), false)
Test.assertEquals(periodIsLate(new Date(2016, 6, 13), new Date(2016, 6, 29), 28), false)
Test.assertEquals(periodIsLate(new Date(2016, 6, 12), new Date(2016, 7, 9), 28), false)
Test.assertEquals(periodIsLate(new Date(2016, 6, 12), new Date(2016, 7, 10), 28), true)
Test.assertEquals(periodIsLate(new Date(2016, 6, 1), new Date(2016, 7, 1), 30), true)
Test.assertEquals(periodIsLate(new Date(2016, 6, 1), new Date(2016, 6, 30), 30), false)
Test.assertEquals(periodIsLate(new Date(2016, 0, 1), new Date(2016, 0, 31), 30), false)
Test.assertEquals(periodIsLate(new Date(2016, 0, 1), new Date(2016, 1, 1), 30), true)

/*
  Random tests
*/

let _MS_PER_DAY = 1000 * 60 * 60 * 24

describe("Random cases: ", function () {
  for (let i = 0; i < 20; i++) {
    if (Math.floor(Math.random() * 2 + 1) == 1) {
      falseCase()
    } else {
      trueCase()
    }
  }
})

function falseCase() {
  // randomize cycle length
  let cycleLength = Math.floor(Math.random() * 10 + 1)
  let year = Math.floor(Math.random() * 2016 + 2000)
  let month = Math.floor(Math.random() * 11 + 0)
  let day = Math.floor(Math.random() * 27 + 0)

  // create last date object
  let last = new Date(year, month, day)

  // add the cycle length
  let msSinceLast = cycleLength * _MS_PER_DAY
  let today = last.getTime() + msSinceLast
  today = new Date(today)
  Test.assertEquals(periodIsLate(last, today, cycleLength), false)
}

function trueCase() {
  // randomize cycle length
  let cycleLength = Math.floor(Math.random() * 10 + 1)
  let year = Math.floor(Math.random() * 2016 + 2000)
  let month = Math.floor(Math.random() * 11 + 0)
  let day = Math.floor(Math.random() * 27 + 0)

  // create last date object
  let last = new Date(year, month, day)

  // add the cycle length
  let msSinceLast = cycleLength * _MS_PER_DAY
  let today = last.getTime() + msSinceLast
  today = new Date(today)
  Test.assertEquals(periodIsLate(last, today, cycleLength - 1), true)
}
