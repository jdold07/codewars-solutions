//+ ====================================================================================================================
//+
//+ 5 kyu - First Variation on Caesar Cipher  [ ID: 5508249a98b3234f420000fb ] (first-variation-on-caesar-cipher)
//+ URL: https://www.codewars.com/kata/5508249a98b3234f420000fb
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | CIPHERS | STRINGS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { movingShift, demovingShift } = require("./firstVariationOnCaesarCipher")

describe("Tests", () => {
  it("test", () => {
    let u = "I should have known that you would have a perfect answer for me!!!"
    let v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]
    assert.deepEqual(movingShift(u, 1), v)
    assert.deepEqual(demovingShift(v, 1), u)
    u = "O CAPTAIN! my Captain! our fearful trip is done;"
    assert.deepEqual(demovingShift(movingShift(u, 1), 1), u)
    u = "For you bouquets and ribbon'd wreaths--for you the shores a-crowding;"
    assert.deepEqual(demovingShift(movingShift(u, 1), 1), u)
    u =
      "Exult, O shores, and ring, O bells! But I, with mournful tread, Walk the deck my Captain lies, Fallen cold and dead. "
    assert.deepEqual(demovingShift(movingShift(u, 1), 1), u)
    u = "As human beings, when we encounter a challenge, we have freedom to choose how to react."
    assert.deepEqual(demovingShift(movingShift(u, 1), 1), u)
    u = "Every decision that we make leads us down a different road."
    v = ["Fxhvd kmlsdu", "bb jysm ra k", "zkf oifjz dc", " pbkc r wcab", "bpdnu usfj."]
    assert.deepEqual(movingShift(u, 1), v)
    assert.deepEqual(demovingShift(v, 1), u)
    u = "How can we become the kind of people that face our fear and do it anyway?"
    v = ["Iqz hgu fo nrqd", "cv mbz hgmd qi ", "ukvxuo fuoi wsv", "y krp ffcu ftk ", "my ug pdpots?"]
    assert.deepEqual(movingShift(u, 1), v)
    assert.deepEqual(demovingShift(v, 1), u)

    //-----------------------

    assert.deepEqual(movingShift(" uoxIirmoveNreefckgieaoiEcooqo", 2), [" xscOp", "zvygqA", "ftuwud", "adaxmh", "Edqrut"])
    assert.deepEqual(movingShift("uaoQop jx eh osr okaKv vzagzwpxagokBKriipmc U", 2), [
      "wdsVuw sh",
      " qu dii h",
      "evGs uzbi",
      "caudhoxuM",
      "Wewxfdu O"
    ])
    assert.deepEqual(movingShift("kgpiqislyhvmffdzlyehjiIteAaaotcoapk bbMgaHlda", 2), [
      "mjtnwpaui",
      "shztutqdr",
      "ycffGseBc",
      "dsyiviyu ",
      "noAvqYdwu"
    ])
    assert.deepEqual(movingShift("abcdefghjuty", 1), ["bdf", "hjl", "nps", "eek", ""])
    assert.deepEqual(movingShift("abcdefghjuty1234", 1), ["bdfh", "jlnp", "seek", "1234", ""])

    //-----------------------

    //-----------------------

    assert.deepEqual(demovingShift([" xscOp", "zvygqA", "ftuwud", "adaxmh", "Edqrut"], 2), " uoxIirmoveNreefckgieaoiEcooqo")
    assert.deepEqual(
      demovingShift(["wdsVuw sh", " qu dii h", "evGs uzbi", "caudhoxuM", "Wewxfdu O"], 2),
      "uaoQop jx eh osr okaKv vzagzwpxagokBKriipmc U"
    )
    assert.deepEqual(
      demovingShift(["mjtnwpaui", "shztutqdr", "ycffGseBc", "dsyiviyu ", "noAvqYdwu"], 2),
      "kgpiqislyhvmffdzlyehjiIteAaaotcoapk bbMgaHlda"
    )

    //-----------------------
  })
})
