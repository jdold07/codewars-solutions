/* eslint-disable no-unused-vars */
//+ ====================================================================================================================
//+
//+ 5 kyu - Affine Cipher Helper  [ ID: 52f2f1ea12b5cbc66900300a ] (affine-cipher-helper)
//+ URL: https://www.codewars.com/kata/52f2f1ea12b5cbc66900300a
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS | CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { AffineCipher } = require("./affineCipherHelper")

let desc = "Testing with lowercase Latin alphabet"
describe(desc, function () {
  let abc = "abcdefghijklmnopqrstuvwxyz"

  it("Key of 1, 0", function () {
    let c = new AffineCipher(abc, 1, 0)
    assert.strictEqual(c.encode("abcdef"), "abcdef")
    assert.strictEqual(c.encode("codewars"), "codewars")
    assert.strictEqual(c.encode("yyz"), "yyz")
    assert.strictEqual(c.encode("rush"), "rush")
    assert.strictEqual(c.encode("chef goldblum"), "chef goldblum")
    assert.strictEqual(c.encode("buffalobuffalo"), "buffalobuffalo")
    assert.strictEqual(c.encode("abcdef"), "abcdef")

    assert.strictEqual(c.decode("abcdef"), "abcdef")
    assert.strictEqual(c.decode("buffalobuffalo"), "buffalobuffalo")
    assert.strictEqual(c.decode("chef goldblum"), "chef goldblum")
    assert.strictEqual(c.decode("rush"), "rush")
    assert.strictEqual(c.decode("yyz"), "yyz")
    assert.strictEqual(c.decode("codewars"), "codewars")
    assert.strictEqual(c.decode("abcdef"), "abcdef")
  })

  it("Key of 1, 1", function () {
    let c = new AffineCipher(abc, 1, 1)
    assert.strictEqual(c.encode("abcdef"), "bcdefg")
    assert.strictEqual(c.encode("codewars"), "dpefxbst")
    assert.strictEqual(c.encode("yyz"), "zza")
    assert.strictEqual(c.encode("abcdef"), "bcdefg")
    assert.strictEqual(c.encode("rush"), "svti")
    assert.strictEqual(c.encode("chef goldblum"), "difg hpmecmvn")
    assert.strictEqual(c.encode("buffalobuffalo"), "cvggbmpcvggbmp")

    assert.strictEqual(c.decode("bcdefg"), "abcdef")
    assert.strictEqual(c.decode("difg hpmecmvn"), "chef goldblum")
    assert.strictEqual(c.decode("dpefxbst"), "codewars")
    assert.strictEqual(c.decode("zza"), "yyz")
    assert.strictEqual(c.decode("svti"), "rush")
    assert.strictEqual(c.decode("dpefxbst"), "codewars")
    assert.strictEqual(c.decode("cvggbmpcvggbmp"), "buffalobuffalo")
  })

  it("Key of 1, 2", function () {
    let c = new AffineCipher(abc, 1, 2)
    assert.strictEqual(c.encode("abcdef"), "cdefgh")
    assert.strictEqual(c.encode("codewars"), "eqfgyctu")
    assert.strictEqual(c.encode("yyz"), "aab")
    assert.strictEqual(c.encode("rush"), "twuj")
    assert.strictEqual(c.encode("chef goldblum"), "ejgh iqnfdnwo")
    assert.strictEqual(c.encode("buffalobuffalo"), "dwhhcnqdwhhcnq")
    assert.strictEqual(c.encode("codewars"), "eqfgyctu")

    assert.strictEqual(c.decode("cdefgh"), "abcdef")
    assert.strictEqual(c.decode("eqfgyctu"), "codewars")
    assert.strictEqual(c.decode("aab"), "yyz")
    assert.strictEqual(c.decode("twuj"), "rush")
    assert.strictEqual(c.decode("ejgh iqnfdnwo"), "chef goldblum")
    assert.strictEqual(c.decode("dwhhcnqdwhhcnq"), "buffalobuffalo")
    assert.strictEqual(c.decode("eqfgyctu"), "codewars")
  })

  it("Key of 3, 0", function () {
    let c = new AffineCipher(abc, 3, 0)
    assert.strictEqual(c.encode("abcdef"), "adgjmp")
    assert.strictEqual(c.encode("codewars"), "gqjmoazc")
    assert.strictEqual(c.encode("yyz"), "uux")
    assert.strictEqual(c.encode("rush"), "zicv")
    assert.strictEqual(c.encode("chef goldblum"), "gvmp sqhjdhik")
    assert.strictEqual(c.encode("buffalobuffalo"), "dippahqdippahq")
    assert.strictEqual(c.encode("codewars"), "gqjmoazc")

    assert.strictEqual(c.decode("adgjmp"), "abcdef")
    assert.strictEqual(c.decode("gqjmoazc"), "codewars")
    assert.strictEqual(c.decode("uux"), "yyz")
    assert.strictEqual(c.decode("zicv"), "rush")
    assert.strictEqual(c.decode("gvmp sqhjdhik"), "chef goldblum")
    assert.strictEqual(c.decode("dippahqdippahq"), "buffalobuffalo")
    assert.strictEqual(c.decode("gqjmoazc"), "codewars")
  })

  it("Key of 19, 11", function () {
    let c = new AffineCipher(abc, 19, 11)
    assert.strictEqual(c.encode("abcdef"), "lexqjc")
    assert.strictEqual(c.encode("lobotomy"), "mrerirfz")
    assert.strictEqual(c.encode("kingdom"), "thyvqrf")
    assert.strictEqual(c.encode("trampoline"), "iwlfkrmhyj")
    assert.strictEqual(c.encode("sliced bread"), "pmhxjq ewjlq")
    assert.strictEqual(c.encode("generation"), "vjyjwlihry")
    assert.strictEqual(c.encode("jeweler"), "ajnjmjw")

    assert.strictEqual(c.decode("lexqjc"), "abcdef")
    assert.strictEqual(c.decode("mrerirfz"), "lobotomy")
    assert.strictEqual(c.decode("thyvqrf"), "kingdom")
    assert.strictEqual(c.decode("iwlfkrmhyj"), "trampoline")
    assert.strictEqual(c.decode("pmhxjq ewjlq"), "sliced bread")
    assert.strictEqual(c.decode("vjyjwlihry"), "generation")
    assert.strictEqual(c.decode("ajnjmjw"), "jeweler")
  })

  desc = "Should throw error for invalid keys"
  it(desc, function () {
    desc = "Failed to throw error"
    assert.throws(
      function () {
        let c = new AffineCipher(abc, 2, 11)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        let c = new AffineCipher(abc, 2, 21)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        let c = new AffineCipher(abc, 4, 1)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        let c = new AffineCipher(abc, 4, 19)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        let c = new AffineCipher(abc, 8, 25)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        let c = new AffineCipher(abc, 8, 9)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        let c = new AffineCipher(abc, 22, 11)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        let c = new AffineCipher(abc, 22, 9)
      },
      Error,
      undefined,
      desc
    )
  })
})

desc = "Testing with lowercase Greek alphabet (without final-form sigma)"
describe(desc, function () {
  let abc = "αβγδεζηθικλμνξοπρστυφχψω"

  it("Key of 1, 0", function () {
    let c = new AffineCipher(abc, 1, 0)
    assert.strictEqual(c.encode("αβγδεζ"), "αβγδεζ")
    assert.strictEqual(c.encode("ήρωασ"), "ήρωασ")
    assert.strictEqual(c.encode("ψψω"), "ψψω")
    assert.strictEqual(c.encode("Αθήνα"), "Αθήνα")
    assert.strictEqual(c.encode("σπαρτιατικόσ"), "σπαρτιατικόσ")
    assert.strictEqual(c.encode("περσικόσ"), "περσικόσ")
    assert.strictEqual(c.encode("αβγδεζ"), "αβγδεζ")

    assert.strictEqual(c.decode("αβγδεζ"), "αβγδεζ")
    assert.strictEqual(c.decode("ήρωασ"), "ήρωασ")
    assert.strictEqual(c.decode("ψψω"), "ψψω")
    assert.strictEqual(c.decode("Αθήνα"), "Αθήνα")
    assert.strictEqual(c.decode("σπαρτιατικόσ"), "σπαρτιατικόσ")
    assert.strictEqual(c.decode("περσικόσ"), "περσικόσ")
    assert.strictEqual(c.decode("αβγδεζ"), "αβγδεζ")
  })

  it("Key of 1, 1", function () {
    let c = new AffineCipher(abc, 1, 1)
    assert.strictEqual(c.encode("αβγδεζ"), "βγδεζη")
    assert.strictEqual(c.encode("ήρωασ"), "ήσαβτ")
    assert.strictEqual(c.encode("ψψω"), "ωωα")
    assert.strictEqual(c.encode("Αθήνα"), "Αιήξβ")
    assert.strictEqual(c.encode("σπαρτιατικόσ"), "τρβσυκβυκλότ")
    assert.strictEqual(c.encode("περσικόσ"), "ρζστκλότ")
    assert.strictEqual(c.encode("αβγδεζ"), "βγδεζη")

    assert.strictEqual(c.decode("βγδεζη"), "αβγδεζ")
    assert.strictEqual(c.decode("ήσαβτ"), "ήρωασ")
    assert.strictEqual(c.decode("ωωα"), "ψψω")
    assert.strictEqual(c.decode("Αιήξβ"), "Αθήνα")
    assert.strictEqual(c.decode("τρβσυκβυκλότ"), "σπαρτιατικόσ")
    assert.strictEqual(c.decode("ρζστκλότ"), "περσικόσ")
    assert.strictEqual(c.decode("βγδεζη"), "αβγδεζ")
  })

  it("Key of 1, 2", function () {
    let c = new AffineCipher(abc, 1, 2)
    assert.strictEqual(c.encode("αβγδεζ"), "γδεζηθ")
    assert.strictEqual(c.encode("ήρωασ"), "ήτβγυ")
    assert.strictEqual(c.encode("ψψω"), "ααβ")
    assert.strictEqual(c.encode("Αθήνα"), "Ακήογ")
    assert.strictEqual(c.encode("σπαρτιατικόσ"), "υσγτφλγφλμόυ")
    assert.strictEqual(c.encode("περσικόσ"), "σητυλμόυ")
    assert.strictEqual(c.encode("αβγδεζ"), "γδεζηθ")

    assert.strictEqual(c.decode("γδεζηθ"), "αβγδεζ")
    assert.strictEqual(c.decode("ήτβγυ"), "ήρωασ")
    assert.strictEqual(c.decode("ααβ"), "ψψω")
    assert.strictEqual(c.decode("Ακήογ"), "Αθήνα")
    assert.strictEqual(c.decode("υσγτφλγφλμόυ"), "σπαρτιατικόσ")
    assert.strictEqual(c.decode("σητυλμόυ"), "περσικόσ")
    assert.strictEqual(c.decode("γδεζηθ"), "αβγδεζ")
  })

  it("Key of 5, 0", function () {
    let c = new AffineCipher(abc, 5, 0)
    assert.strictEqual(c.encode("αβγδεζ"), "αζλπφβ")
    assert.strictEqual(c.encode("ήρωασ"), "ήιυαξ")
    assert.strictEqual(c.encode("ψψω"), "οου")
    assert.strictEqual(c.encode("Αθήνα"), "Αμήνα")
    assert.strictEqual(c.encode("σπαρτιατικόσ"), "ξδαιτρατρχόξ")
    assert.strictEqual(c.encode("περσικόσ"), "δφιξρχόξ")
    assert.strictEqual(c.encode("αβγδεζ"), "αζλπφβ")

    assert.strictEqual(c.decode("αζλπφβ"), "αβγδεζ")
    assert.strictEqual(c.decode("ήιυαξ"), "ήρωασ")
    assert.strictEqual(c.decode("οου"), "ψψω")
    assert.strictEqual(c.decode("Αμήνα"), "Αθήνα")
    assert.strictEqual(c.decode("ξδαιτρατρχόξ"), "σπαρτιατικόσ")
    assert.strictEqual(c.decode("δφιξρχόξ"), "περσικόσ")
    assert.strictEqual(c.decode("αζλπφβ"), "αβγδεζ")
  })

  it("Key of 19, 11", function () {
    let c = new AffineCipher(abc, 19, 11)
    assert.strictEqual(c.encode("λάθοσ"), "κάαξψ")
    assert.strictEqual(c.encode("ωκεανόσ"), "ροπμωόψ")
    assert.strictEqual(c.encode("μητέρα"), "εζσέδμ")
    assert.strictEqual(c.encode("φωτογραφία"), "θρσξβδμθίμ")
    assert.strictEqual(c.encode("πεινασμένοι πεινασμένοι ιπποπόταμοι"), "ιπυωμψεέωξυ ιπυωμψεέωξυ υιιξιόσμεξυ")
    assert.strictEqual(c.encode("ρωμαϊκόσ"), "δρεμϊοόψ")
    assert.strictEqual(c.encode("αγγλικόσ"), "μββκυοόψ")

    assert.strictEqual(c.decode("κάαξψ"), "λάθοσ")
    assert.strictEqual(c.decode("ροπμωόψ"), "ωκεανόσ")
    assert.strictEqual(c.decode("εζσέδμ"), "μητέρα")
    assert.strictEqual(c.decode("θρσξβδμθίμ"), "φωτογραφία")
    assert.strictEqual(c.decode("ιπυωμψεέωξυ ιπυωμψεέωξυ υιιξιόσμεξυ"), "πεινασμένοι πεινασμένοι ιπποπόταμοι")
    assert.strictEqual(c.decode("δρεμϊοόψ"), "ρωμαϊκόσ")
    assert.strictEqual(c.decode("μββκυοόψ"), "αγγλικόσ")
  })

  desc = "Should throw error for invalid keys"
  it(desc, function () {
    desc = "Failed to throw error"
    assert.throws(
      function () {
        new AffineCipher(abc, 2, 11)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        new AffineCipher(abc, 2, 21)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        new AffineCipher(abc, 4, 0)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        new AffineCipher(abc, 4, 1)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        new AffineCipher(abc, 4, 19)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        new AffineCipher(abc, 8, 25)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        new AffineCipher(abc, 8, 9)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        new AffineCipher(abc, 22, 11)
      },
      Error,
      undefined,
      desc
    )
    assert.throws(
      function () {
        new AffineCipher(abc, 22, 9)
      },
      Error,
      undefined,
      desc
    )
  })
})
