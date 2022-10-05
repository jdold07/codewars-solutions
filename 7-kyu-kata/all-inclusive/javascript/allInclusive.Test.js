// 7 kyu - All Inclusive?  [ ID: 5700c9acc1555755be00027e  (all-inclusive) ]
// URL: https://www.codewars.com/kata/5700c9acc1555755be00027e
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
function testing(actual, expected) {
  Test.assertEquals(actual, expected)
}

describe("Basic tests", function () {
  it("containAllRots", function () {
    testing(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)
    testing(
      containAllRots("XjYABhR", [
        "TzYxlgfnhf",
        "yqVAuoLjMLy",
        "BhRXjYA",
        "YABhRXj",
        "hRXjYAB",
        "jYABhRX",
        "XjYABhR",
        "ABhRXjY"
      ]),
      false
    )
    testing(
      containAllRots("QJAhQmS", ["hQmSQJA", "QJAhQmS", "QmSQJAh", "yUgUXoQE", "AhQmSQJ", "mSQJAhQ", "SQJAhQm", "JAhQmSQ"]),
      true
    )
    testing(
      containAllRots("Etsshp", ["nVOETcaxdvuk", "shpEts", "hpEtss", "Etsshp", "OuIiQ", "sXrDdPXIaW", "tsshpE", "pEtssh"]),
      false
    )
    testing(containAllRots("Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl"]), false)
    testing(
      containAllRots("MqhWvHF", [
        "numMfygcH",
        "HFMqhWv",
        "qhWvHFM",
        "ZJKKxM",
        "hWvHFMq",
        "MqhWvHF",
        "hfZWYSqk",
        "BTcSoEdchPlL",
        "WvHFMqh",
        "vHFMqhW",
        "FMqhWvH"
      ]),
      true
    )
    testing(containAllRots("UDvG", ["vGUD", "UDvG", "GUDv", "DvGU"]), true)
    testing(
      containAllRots("sObPfw", ["ObPfws", "Cofuhqrmmzq", "wFvfcqU", "sObPfw", "bPfwsO", "PfwsOb", "wsObPf", "fwsObP"]),
      true
    )
    testing(containAllRots("KUckM", ["MKUck", "EDjfbQB", "GUPwzk", "SKZvilwnL", "UckMK", "KUckM", "kMKUc"]), false)
    testing(containAllRots("FDIe", ["DIeF", "IeFD", "FDIe", "eFDI"]), true)
    testing(containAllRots("12341234", ["DIeF", "IeFD", "12341234", "41234123", "34123412", "23412341"]), true)
  })
})

describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }
  //................
  function rotationsSol65(strng) {
    let result = new Set()
    for (let index = 0; index < strng.length; index++) {
      let rotatedString = strng.substring(index) + strng.substring(0, index)
      if (result.has(rotatedString) === false) {
        result.add(rotatedString)
      }
    }
    return result
  }
  function rotations_array(strng) {
    let result = []
    for (let index = 0; index < strng.length; index++) {
      let rotatedString = strng.substring(index) + strng.substring(0, index)
      if (result.indexOf(rotatedString) === -1) result.push(rotatedString)
    }
    return result
  }
  function containAllRotsSol65(strng, arr) {
    let r = rotationsSol65(strng)
    let intersection = new Set(arr.filter((x) => r.has(x)))
    if (r.size !== intersection.size) return false
    for (let a of r) if (!intersection.has(a)) return false
    return true
  }
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let tmp = a[i]
      a[i] = a[j]
      a[j] = tmp
    }
    return a
  }
  function doStr(k) {
    let s = ""
    let j = 0
    while (j < k) {
      if (randint(0, 100) % 2 === 0) s += String.fromCharCode(randint(97, 122))
      else s += String.fromCharCode(randint(65, 90))
      j++
    }
    return s
  }
  function doEx(str) {
    let rot = rotations_array(str)
    let k = randint(0, 100)
    if (k % 2 == 0) {
      let t = randint(0, rot.length - 1)
      rot.splice(t, 1)
    }
    let n = randint(0, 5)
    let i = 0
    while (i < n) {
      rot.push(doStr(randint(5, 12)))
      i++
    }
    return shuffle(rot)
  }
  //.................
  console.log("****containAllRots")
  function tests_code() {
    let i = 0
    while (i < 200) {
      let a = doStr(randint(8, 15))
      let r = doEx(a)
      let sol = containAllRotsSol65(a, r)
      testing(containAllRots(a, r), sol)
      i++
    }
  }
  tests_code()
})
