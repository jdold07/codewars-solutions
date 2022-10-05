// 4 kyu - Human readable duration format  [ ID: 52742f58faf5485cae000b9a  (human-readable-duration-format) ]
// URL: https://www.codewars.com/kata/52742f58faf5485cae000b9a
// Category: ALGORITHMS  |  Tags: STRINGS | DATE TIME | ALGORITHMS
// *****************************************************************************
describe("basic tests", () => {
  Test.assertEquals(formatDuration(0), "now")

  Test.assertEquals(formatDuration(1), "1 second")
  Test.assertEquals(formatDuration(62), "1 minute and 2 seconds")
  Test.assertEquals(formatDuration(120), "2 minutes")
  Test.assertEquals(formatDuration(3600), "1 hour")
  Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds")

  Test.assertEquals(formatDuration(15731080), "182 days, 1 hour, 44 minutes and 40 seconds")
  Test.assertEquals(formatDuration(132030240), "4 years, 68 days, 3 hours and 4 minutes")
  Test.assertEquals(formatDuration(205851834), "6 years, 192 days, 13 hours, 3 minutes and 54 seconds")
  Test.assertEquals(formatDuration(253374061), "8 years, 12 days, 13 hours, 41 minutes and 1 second")
  Test.assertEquals(formatDuration(242062374), "7 years, 246 days, 15 hours, 32 minutes and 54 seconds")
  Test.assertEquals(formatDuration(101956166), "3 years, 85 days, 1 hour, 9 minutes and 26 seconds")
  Test.assertEquals(formatDuration(33243586), "1 year, 19 days, 18 hours, 19 minutes and 46 seconds")
})

describe("random tests", () => {
  function sol(seconds) {
    if (seconds == 0) return "now"
    function formatComponents(x) {
      var firsts = x.slice(0, -1).join(", ")
      return (firsts && firsts + " and ") + x[x.length - 1]
    }

    var components = ["year", "day", "hour", "minute", "second"]
    var times = [31536000, 86400, 3600, 60, 1]

    return formatComponents(
      times
        .map((secondsByUnit, i) => {
          var value = (seconds / secondsByUnit) | 0
          seconds %= secondsByUnit
          return value == 0 ? "" : value + " " + components[i] + (value > 1 ? "s" : "")
        })
        .filter(Boolean)
    )
  }
  for (let i = 0; i < 100; i++) {
    const n = Math.floor(Math.random() * 10000000)
    Test.assertEquals(formatDuration(n), sol(n))
  }
})
