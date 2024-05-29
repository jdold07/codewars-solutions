//+ ====================================================================================================================
//+
//+ 8 kyu - DNA to RNA Conversion  [ ID: 5556282156230d0e5e000089 ] (dna-to-rna-conversion)
//+ URL: https://www.codewars.com/kata/5556282156230d0e5e000089
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { DNAtoRNA } = require("./dnaToRnaConversion")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
    assert.strictEqual(
      DNAtoRNA("GATTCCACCGACTTCCCAAGTACCGGAAGCGCGACCAACTCGCACAGC"),
      "GAUUCCACCGACUUCCCAAGUACCGGAAGCGCGACCAACUCGCACAGC"
    )
    assert.strictEqual(
      DNAtoRNA("CACGACATACGGAGCAGCGCACGGTTAGTACAGCTGTCGGTGAACTCCATGACA"),
      "CACGACAUACGGAGCAGCGCACGGUUAGUACAGCUGUCGGUGAACUCCAUGACA"
    )
    assert.strictEqual(
      DNAtoRNA("CACGACATACGGAGCAGCGCACGGTTAGTACAGCTGTCGGTGAACTCCATGACA"),
      "CACGACAUACGGAGCAGCGCACGGUUAGUACAGCUGUCGGUGAACUCCAUGACA"
    )
    assert.strictEqual(
      DNAtoRNA("AACCCTGTCCACCAGTAACGTAGGCCGACGGGAAAAATAAACGATCTGTCAATG"),
      "AACCCUGUCCACCAGUAACGUAGGCCGACGGGAAAAAUAAACGAUCUGUCAAUG"
    )
    assert.strictEqual(
      DNAtoRNA(
        "GAAGCTTATCCGTTCCTGAAGGCTGTGGCATCCTCTAAATCAGACTTGGCTACGCCGTTAGCCGAGGGCTTAGCGTTGAGTGTCATTATATACGCGGCCTGCGACCTGGCCACACAATGCCCTCGAAAATTTTTCTTTCGGTTATACGAGTTGCGAAACCTTTCGCGCGTAGACGAAGAATTTGAAGTGGCCTACACCGTTTGGAAAGCCGTTCTCATTAGAATGGTACCGACTACTCGGCTCGGAGTCATTGTATAGGGAGAGTGTCGTATCAACATCACACACTTTTAGCATTTAAGGTCCATGGCCGTTGACAGGTACCGA"
      ),
      "GAAGCUUAUCCGUUCCUGAAGGCUGUGGCAUCCUCUAAAUCAGACUUGGCUACGCCGUUAGCCGAGGGCUUAGCGUUGAGUGUCAUUAUAUACGCGGCCUGCGACCUGGCCACACAAUGCCCUCGAAAAUUUUUCUUUCGGUUAUACGAGUUGCGAAACCUUUCGCGCGUAGACGAAGAAUUUGAAGUGGCCUACACCGUUUGGAAAGCCGUUCUCAUUAGAAUGGUACCGACUACUCGGCUCGGAGUCAUUGUAUAGGGAGAGUGUCGUAUCAACAUCACACACUUUUAGCAUUUAAGGUCCAUGGCCGUUGACAGGUACCGA"
    )
  })
})

describe("Random tests", () => {
  const s = "ACGT"

  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  for (let i = 0; i < 100; i++) {
    let word = Array.from({ length: randint(0, 20) }, () => s[randint(0, s.length - 1)]).join``
    let expected = word.replace(/T/g, "U")
    it(`sDNAtoRNA(${JSON.stringify(word)}) should equal ${JSON.stringify(expected)}`, () => {
      assert.strictEqual(DNAtoRNA(word), expected)
    })
  }
})
