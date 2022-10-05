// 8 kyu - Geometry Basics: Distance between points in 2D  [ ID: 58dced7b702b805b200000be  (geometry-basics-distance-between-points-in-2d) ]
// URL: https://www.codewars.com/kata/58dced7b702b805b200000be
// Category: REFERENCE  |  Tags: GEOMETRY | FUNDAMENTALS
// *****************************************************************************
const distanceBetweenPoints = (a, b) => 
    Math.round((((b.x - a.x) ** 2 + (b.y - a.y) ** 2) ** 0.5) * 10 ** 6) / 10 ** 6
