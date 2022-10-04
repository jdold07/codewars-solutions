// 5 kyu - Human Readable Time  [ ID: 52685f7382004e774f0001f7  (human-readable-time) ]
// URL: https://www.codewars.com/kata/52685f7382004e774f0001f7
// Category: undefined  |  Tags: DATE TIME | MATHEMATICS | ALGORITHMS
// *****************************************************************************
function humanReadable(seconds) {
  let hours, minutes
  hours = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0")
  seconds = seconds - hours * 3600
  minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0")
  seconds = (seconds - minutes * 60).toString().padStart(2, "0")
  return `${hours}:${minutes}:${seconds}`
}
