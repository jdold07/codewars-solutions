// [object Object] - Find out whether the shape is a cube  [ ID: 58d248c7012397a81800005c  (find-out-whether-the-shape-is-a-cube) ]
// URL: https://www.codewars.com/kata/58d248c7012397a81800005c
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const cubeChecker = (volume, side) => volume > 0 && side > 0 && side ** 3 === volume
