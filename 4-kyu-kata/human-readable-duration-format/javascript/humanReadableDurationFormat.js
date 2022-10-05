// 4 kyu - Human readable duration format  [ ID: 52742f58faf5485cae000b9a  (human-readable-duration-format) ]
// URL: https://www.codewars.com/kata/52742f58faf5485cae000b9a
// Category: ALGORITHMS  |  Tags: STRINGS | DATE TIME | ALGORITHMS
// *****************************************************************************
function formatDuration(seconds) {
  if (seconds === 0) return "now"
  let timeArray = []

  function plural(units) {
    switch (units[0]) {
      case "N":
        return //handle NaN
      case "0":
        return
      case "1":
        if (/\D/.test(units[1])) break // test for multi-digit number starting with 1, break if === 1 else continue switch to default
      default:
        units = units.concat("s")
        break
    }
    timeArray.push(units)
  }

  plural(`${Math.floor(seconds / (365 * 24 * 60 * 60))} year`)
  plural(`${Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60))} day`)
  plural(`${Math.floor(((seconds % (365 * 24 * 60 * 60)) % (24 * 60 * 60)) / (60 * 60))} hour`)
  plural(`${Math.floor((((seconds % (365 * 24 * 60 * 60)) % (24 * 60 * 60)) % (60 * 60)) / 60)} minute`)
  plural(`${Math.floor((((seconds % (365 * 24 * 60 * 60)) % (24 * 60 * 60)) % (60 * 60)) % 60)} second`)

  switch (timeArray.length) {
    case 1:
      return timeArray.join("")
    case 2:
      return timeArray.join(" and ")
    default:
      return timeArray.join(", ").replace(/,([^,]*)$/, ` and$1`)
  }
}
