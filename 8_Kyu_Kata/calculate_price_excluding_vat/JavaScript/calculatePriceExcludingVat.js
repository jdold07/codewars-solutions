// 8 kyu - Calculate Price Excluding VAT  [ ID: 5890d8bc9f0f422cf200006b  (calculate-price-excluding-vat) ]
// URL: https://www.codewars.com/kata/5890d8bc9f0f422cf200006b
// Category: undefined  |  Tags: MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
const excludingVatPrice = (price) => price == null ? -1 : (Math.round((price / 1.15) * 100) / 100)
