//+ ====================================================================================================================
//+
//+ 6 kyu - Statistics for an Athletic Association  [ ID: 55b3425df71c1201a800009c ] (statistics-for-an-athletic-association)
//+ URL: https://www.codewars.com/kata/55b3425df71c1201a800009c
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | STATISTICS | MATHEMATICS | DATA SCIENCE
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { stat } from "./statisticsForAnAthleticAssociation"

function doTest(strg: string, expected: string) {
  assert.strictEqual(stat(strg), expected)
}

describe("Fixed Tests", function () {
  it("stat", function () {
    doTest(
      "01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17",
      "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34"
    )
    doTest(
      "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41",
      "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00"
    )
    doTest(
      "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17",
      "Range: 00|31|17 Average: 02|27|10 Median: 02|24|57"
    )
    doTest(
      "0|15|59, 0|16|16, 0|17|20, 0|22|34, 0|19|34, 0|15|0",
      "Range: 00|07|34 Average: 00|17|47 Median: 00|16|48"
    )
    doTest(
      "11|15|59, 10|16|16, 12|17|20, 9|22|34, 13|19|34, 11|15|17, 11|22|00, 10|26|37, 12|17|48, 9|16|30, 12|20|14, 11|25|11",
      "Range: 04|03|04 Average: 11|14|36 Median: 11|18|59"
    )
    doTest(
      "1|15|59, 1|16|16, 1|17|20, 1|22|34, 1|19|34, 1|15|17, 1|22|00, 1|26|37, 1|17|48, 1|16|30, 1|20|14, 1|25|11",
      "Range: 00|11|20 Average: 01|19|36 Median: 01|18|41"
    )
  })
})

function randint(a: number, b: number) {
  return Math.floor(Math.random() * (b - a + 1) + a)
}
//...............
function time2snd1231(s: string) {
  const arr = s.split("|").map(function (x) {
    return ~~x
  })
  const snd = 3600 * arr[0] + 60 * arr[1] + arr[2]
  return snd
}
function pad1231(num: number, size: number) {
  let s = num + ""
  while (s.length < size) s = "0" + s
  return s
}
function snd2time1231(m: number) {
  // const n = ~~m
  const h = Math.floor(m / 3600)
  const re = m % 3600
  const mn = Math.floor(re / 60)
  const s = re % 60
  return pad1231(h, 2) + "|" + pad1231(mn, 2) + "|" + pad1231(s, 2)
}
function stat1231(strg: string) {
  if (strg === "") return ""
  const r = strg
    .split(",")
    .map(function (x) {
      return time2snd1231(x)
    })
    .sort(function (a, b) {
      return a - b
    })
  const lg = r.length
  const avg = ~~(
    r.reduce(function (s, x) {
      return s + x
    }) / lg
  )
  const rge = ~~(r[lg - 1] - r[0])
  const md = ~~((r[~~((lg - 1) / 2)] + r[~~(lg / 2)]) / 2)
  return (
    "Range: " +
    snd2time1231(rge) +
    " Average: " +
    snd2time1231(avg) +
    " Median: " +
    snd2time1231(md)
  )
}
function comb() {
  const a = "01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"
  const b = "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"
  const c = "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17"
  const d = "00|15|59, 00|16|16, 00|17|20, 00|22|34, 00|19|34, 00|15|17"
  const e =
    "11|15|59, 10|16|16, 12|17|20, 9|22|34, 13|19|34, 11|15|17, 11|22|00, 10|26|37, 12|17|48, 9|16|30, 12|20|14, 11|25|11"
  const f =
    "1|15|59, 1|16|16, 1|17|20, 1|22|34, 1|19|34, 1|15|17, 1|22|00, 1|26|37, 1|17|48, 1|16|30, 1|20|14, 1|25|11"

  const k = a + ", " + b + ", " + c + ", " + d + ", " + e + ", " + f
  const s = k.split(", ")
  const l = s.length
  let res = ""
  let i = 0
  const nb = randint(0, 20)
  while (i < nb) {
    const q = randint(0, l - 1)
    res = res + s[q]
    if (i < nb - 1) res += ", "
    i += 1
  }
  return res
}

//...............

describe("Random Tests", function () {
  it("stat", function () {
    for (let _ = 0; _ < 25; _++) {
      const a = comb()
      const sol = stat1231(a)
      doTest(a, sol)
    }
  })
})
