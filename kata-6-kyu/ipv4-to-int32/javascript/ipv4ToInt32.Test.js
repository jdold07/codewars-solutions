//+ ====================================================================================================================
//+
//+ 6 kyu - IPv4 to int32  [ ID: 52ea928a1ef5cfec800003ee ] (ipv4-to-int32)
//+ URL: https://www.codewars.com/kata/52ea928a1ef5cfec800003ee
//+ Category: REFERENCE  |  Tags: NETWORKS | ALGORITHMS | BITS | BINARY | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { ipToInt32 } = require("./ipv4ToInt32")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(ipToInt32("128.32.10.1"), 2149583361, "wrong integer for ip: 128.32.10.1")
    assert.strictEqual(ipToInt32("128.114.17.104"), 2154959208, "wrong integer for ip: 128.114.17.104")
    assert.strictEqual(ipToInt32("0.0.0.0"), 0, "wrong integer for ip: 0.0.0.0")
  })
})
