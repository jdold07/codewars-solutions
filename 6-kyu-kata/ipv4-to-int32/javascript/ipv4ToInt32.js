// 6 kyu - IPv4 to int32  [ ID: 52ea928a1ef5cfec800003ee  (ipv4-to-int32) ]
// URL: https://www.codewars.com/kata/52ea928a1ef5cfec800003ee
// Category: REFERENCE  |  Tags: NETWORKS | ALGORITHMS | BITS | BINARY | FUNDAMENTALS
// *****************************************************************************
const ipToInt32 = (ip) => parseInt(ip.split(".").reduce((a, c) => a + (+c).toString(2).padStart(8, "0"), ""), 2)
