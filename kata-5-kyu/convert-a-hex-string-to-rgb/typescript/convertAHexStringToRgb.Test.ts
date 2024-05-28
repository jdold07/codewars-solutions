//+ ====================================================================================================================
//+
//+ 5 kyu - Convert A Hex String To RGB  [ ID: 5282b48bb70058e4c4000fa7 ] (convert-a-hex-string-to-rgb)
//+ URL: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
//+ Category: ALGORITHMS  |  Tags: PARSING | STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================


import { assert } from "chai"
import { hexStringToRGB } from "./convertAHexStringToRgb"


describe("Example Tests", function (): void {
  it("Basic Test", function (): void {
    assert.deepEqual(hexStringToRGB("#FF9933"), { r: 255, g: 153, b: 51 })
  })
})

function myHexToRGB(hexString: string): { r: number; g: number; b: number } {
  const [r, g, b] = hexString!.match(/\w\w/g)!.map((v) => parseInt(v, 16))
  return { r, g, b }
}

const hexList: string[] = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
]
const randInt = (min: number = 0, max: number = 21): number[] =>
  [...Array(6)].map((): number => Math.floor(Math.random() * (max - min + 1) + min))
const hexGenerator = () =>
  `#${randInt()
    .map((v) => hexList[v])
    .join("")}`

describe("Fixed Tests", function (): void {
  let tests = ["#FF9933", "#beaded", "#000000", "#111111", "#Fa3456"]
  for (const test of tests) {
    it(`Simple Test ... HEX Colour: "${test}"`, function (): void {
      assert.deepEqual(hexStringToRGB(test), myHexToRGB(test), `Ooops ... what happened?  Check HEX Colour: "${test}"`)
    })
  }
})

describe("Random Tests", function (): void {
  let tests: number = 94
  while (tests-- > 0) {
    const hex = hexGenerator()
    it(`Random Test ... HEX Colour: "${hex}"`, function (): void {
      assert.deepEqual(hexStringToRGB(hex), myHexToRGB(hex), `Your solution didn't work for HEX Colour: "${hex}"`)
    })
  }
})


