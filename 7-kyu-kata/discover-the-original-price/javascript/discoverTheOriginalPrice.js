// 7 kyu - Discover The Original Price  [ ID: 552564a82142d701f5001228  (discover-the-original-price) ]
// URL: https://www.codewars.com/kata/552564a82142d701f5001228
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
const discoverOriginalPrice = (price, disc) => Math.round((price / (1 - disc / 100)) * 100) / 100
