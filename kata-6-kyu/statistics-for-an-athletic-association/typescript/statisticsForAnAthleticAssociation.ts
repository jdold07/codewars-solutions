//+ ====================================================================================================================
//+
//+ 6 kyu - Statistics for an Athletic Association  [ ID: 55b3425df71c1201a800009c ] (statistics-for-an-athletic-association)
//+ URL: https://www.codewars.com/kata/55b3425df71c1201a800009c
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | STATISTICS | MATHEMATICS | DATA SCIENCE
//+
//+ ====================================================================================================================

function stat(s: string) {
  if (s.length) {
    const arr = s
      .split(",")
      .map((v) => +v.split("|")[0] * 3600 + +v.split("|")[1] * 60 + +v.split("|")[2])
      .sort((a, b) => a - b)
    const avg = arr.reduce((a, b) => a + b, 0) / arr.length
    const rng = Math.max(...arr) - Math.min(...arr)
    const mdn =
      arr.length % 2 ? arr[Math.floor(arr.length / 2)] : (arr[Math.floor(arr.length / 2)] + arr[arr.length / 2 - 1]) / 2
    return `Range: ${toStr(rng)} Average: ${toStr(avg)} Median: ${toStr(mdn)}`
  }
  return s
}

function toStr(time: number): string {
  const hrs = `${Math.trunc(time / 3600)}`.padStart(2, "0")
  const min = `${Math.trunc((time % 3600) / 60)}`.padStart(2, "0")
  const sec = `${Math.trunc((time % 3600) % 60)}`.padStart(2, "0")
  return `${hrs}|${min}|${sec}`
}

export { stat, toStr }
