/* eslint-disable @typescript-eslint/no-explicit-any */
//+ ====================================================================================================================
//+
//+ 6 kyu - Who likes it?  [ ID: 5266876b8f4bf2da9b000362 ] (who-likes-it)
//+ URL: https://www.codewars.com/kata/5266876b8f4bf2da9b000362
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { likes } from "./whoLikesIt"

describe("static tests", function () {
  it("should return correct text", function () {
    assert.equal(likes([]), "no one likes this")
    assert.equal(likes(["Peter"]), "Peter likes this")
    assert.equal(likes(["Jacob", "Alex"]), "Jacob and Alex like this")
    assert.equal(likes(["Max", "John", "Mark"]), "Max, John and Mark like this")
    assert.equal(likes(["Alex", "Jacob", "Mark", "Max"]), "Alex, Jacob and 2 others like this")
  })
})

describe("Random tests", function () {
  it("Tests", function () {
    // const names: string[] = []
    const r = (l: number, c: string[] = [..."ABCDEFHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyzgG"]) =>
      c[(Math.random() * 50) | 0].toUpperCase() + [...Array(l)].map(() => c[(Math.random() * c.length) | 0]).join("")
    const T = (a: any[]) => {
      const l: number = a.length
      const b: any = ` like${l < 2 ? "s" : ""} this`
      const s: any[] = ["no one", "{s}", "{s} and {s}", "{s}, {s} and {s}", "{s}, {s} and {n} others"]
      return (s[Math.min(l, 4)] + b).replace(/\{s\}|\{n\}/g, (B: any) => (B == "{s}" ? a.shift() : l - 2))
    }
    for (let i = 0; i < 100; i++) {
      const NA: string[] =
        Math.random() < 0.2
          ? []
          : r((Math.random() * 100) | 0)
              .split(/g/i)
              .map((c) => (c == "" ? r((Math.random() * 10) | 0) : c))
      const MA: string[] = NA.slice()
      const EA: string[] = NA.slice()
      const re: string = T(MA)
      const ue: string = likes(NA)
      assert.equal(
        ue,
        re,
        `Testing for ${EA.join(",")}

Expected  ${re}

But instead got ${ue}}`
      )
    }
  })
})
