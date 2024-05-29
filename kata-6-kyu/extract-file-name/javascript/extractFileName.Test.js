//+ ====================================================================================================================
//+
//+ 6 kyu - extract file name  [ ID: 597770e98b4b340e5b000071 ] (extract-file-name)
//+ URL: https://www.codewars.com/kata/597770e98b4b340e5b000071
//+ Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { FileNameExtractor } = require("./extractFileName")

it("basic tests", function () {
  assert.strictEqual(
    FileNameExtractor.extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"),
    "FILE_NAME.EXTENSION"
  )
  assert.strictEqual(
    FileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34"),
    "FILE_NAME.EXTENSION"
  )
  assert.strictEqual(
    FileNameExtractor.extractFileName("1_FILE_NAM-E.EXTENSION.OTHEREXTENSIONadasdassdassds34"),
    "FILE_NAM-E.EXTENSION",
    "please verify that you are handling well character - as part of the name"
  )
})

it("random tests", function () {
  let extension, filename, firstPart, j, tstfilename

  for (j = 0; j < 35; j++) {
    firstPart = (Math.random(10) * 100000).toFixed(0)
    filename = Math.random().toString(36).substr(2)
    extension = Math.random().toString(36).substr(2, 3)
    tstfilename = firstPart + "_" + filename + "." + extension + "." + firstPart + "a"
    assert.strictEqual(FileNameExtractor.extractFileName(tstfilename), filename + "." + extension)
  }
})
